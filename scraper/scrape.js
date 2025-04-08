import * as cheerio from 'cheerio';

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


console.log(links, links.length);
