import * as cheerio from "cheerio";
import { createWriteStream } from "fs";
import { writeFile, mkdir } from "fs/promises";
import { Readable } from "stream";
import { finished } from "stream/promises";

const scrapeLinks = async () => {
  const links = [];

  for (let i = 1; i <= 12; i++) {
    const res = await fetch(`https://gregorova.eu/nazory/?page=${i}`);
    const html = await res.text();
    const $ = cheerio.load(html);
    $("article > a").each((i, el) => {
      const href = $(el).attr("href");
      if (href.startsWith("/")) {
        links.push(href);
      }
    });
  }

  return links;
};

const links = await scrapeLinks();
console.log(links);

const downloadImage = async (link) => {
  const { body } = await fetch(`https://gregorova.eu${link}`);
  const pathArr = link.split("/");

  const filename = pathArr[pathArr.length - 1];
  const path = pathArr.slice(1, -1).join("/");

  await mkdir(`public/${path}`, { recursive: true });

  const stream = createWriteStream(`public/${path}/${filename}`);
  await finished(Readable.fromWeb(body).pipe(stream));
  console.log(`Downloaded ${filename}`);
  return filename;
};

const scrapeArticle = async (link, index) => {
  const res = await fetch(`https://gregorova.eu${link}`);
  const html = await res.text();
  const $ = cheerio.load(html);
  const coverImage = $("article > .article-image")
    .attr("style")
    .replace(/.*url\((.*)\).*/, "$1");
  await downloadImage(coverImage);

  $(".article-content > section > img").each((i, el) => {
    const imgSrc = $(el).attr("src");
    downloadImage(imgSrc);
  });

  return {
    id: index,
    link,
    img: coverImage,
    date:
      $(".article-content > header .date")
        .text()
        .match(/\d{2}\.\d{2}\.\d{4}/)?.[0]
        ?.replace(
          /^(\d{2})\.(\d{2})\.(\d{4})$/,
          (_, d, m, y) => `${parseInt(d)}. ${parseInt(m)}. ${y}`
        ) || "",

    title: $(".article-content > header h1").text(),
    perex: $(".article-content > header > p").text(),
    content: $(".article-content > section").html(),
  };
};

const articles = [];

for (let i = 0; i < links.length; i++) {
  const article = await scrapeArticle(links[i], i);
  articles.push(article);
}

await writeFile("./articles.json", JSON.stringify(articles, null, 2), "utf-8");
