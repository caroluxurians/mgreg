import * as cheerio from 'cheerio';
import { writeFile } from 'fs/promises';

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
}

//const links = await scrapeLinks();
//console.log(links)

const scrapeArticle = async (link) => {
  const res = await fetch(`https://gregorova.eu${link}`);
  const html = await res.text();
  const $ = cheerio.load(html);

  return {
    img: $("article > .article-image").attr("style"),
    date: $(".article-content > header .date").text(),
    title: $(".article-content > header h1").text(),
    perex: $(".article-content > header p").text(),
    content: $(".article-content > section").html(),
  };
}

const articles = [];
articles.push(await scrapeArticle("/europoslankyne-testuje-ai-aplikace-ktere-jsou-fajn-a-na-ktere-si-dat-pozor/"))
console.log(articles);

writeFile("articles.json", JSON.stringify(articles, null, 2), "utf-8")
