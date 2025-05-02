import * as cheerio from "cheerio";
import { perexPreview as titlePreview } from "../clanky/ArticlePreview";

// TODO tahat odsud: https://www.pirati.cz/jak-pirati-pracuji/?tag_id=216
const czechMonthMap: { [key: string]: number } = {
  ledna: 1,
  února: 2,
  března: 3,
  dubna: 4,
  května: 5,
  června: 6,
  července: 7,
  srpna: 8,
  září: 9,
  října: 10,
  listopadu: 11,
  prosince: 12,
};

const parseCzechDate = (dateStr: string): string => {
  const [day, monthName, year] = dateStr.trim().split(" ");
  const month = czechMonthMap[monthName];
  if (!month) return dateStr;

  return `${day} ${month}. ${year}`;
};

type Release = {
  id: number
  href: string
  time: string
  title: string
};

const PressReleases = async () => {
  const data = fetch("https://www.pirati.cz/jak-pirati-pracuji/?tag_id=761");
  const html = await (await data).text();
  const $ = cheerio.load(html);

  const releases: Release[] = [];
  $(".__article").each((i, el) => {
    if (i < 4) {
      const loadedEl = cheerio.load(el);
      releases.push({
        id: i,
        href: loadedEl("a").attr("href")!,
        time: parseCzechDate(loadedEl(".text-grey-350").text()),
        title: titlePreview(loadedEl("h2").text(), 120),
      });
    }
  });

  return (
    <>
      {releases.map((release) => (
        <div
          className="flex items-center h-30 border-b border-red-pink justify-between md:h-34 xl:h-38 2xl:h-48 3xl:h-44"
          key={release.id}
        >
          <div className="font-heading flex justify-center text-7xl w-14 mr-2 sm:text-8xl md:text-8xl md:w-14 md:mr-4 xl:text-8xl xl:w-10">
            {release.id + 1}
          </div>
          <div className="text-sm font-bold w-80 sm:text-base sm:leading-[1.4] sm:w-84 md:text-base xl:text-lg xl:w-110 2xl:text-2xl 2xl:w-116 3xl:w-134">
            <a
              href={release.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {release.title}
            </a>
          </div>
          <div className="flex flex-col text-xs italic w-25 items-end gap-2 sm:text-base pr-1 md:hidden lg:flex lg:mt-3 lg:text-sm xl:text-base 2xl:text-lg 2xl:mb-6 2xl:gap-3 3xl:text-xl 3xl:w-auto 3xl:gap-5 3xl:mt-10">
            <a
              href={release.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-medium-pink hover:text-medium-pink hover:bg-light-pink transition-colors duration-100 rounded-full font-semibold text-center w-fit px-3 py-1 sm:px-4 3xl:px-7 3xl:py-2.5"
            >
              číst
            </a>
            <div>
              {release.time}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PressReleases;
