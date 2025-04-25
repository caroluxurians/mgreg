import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import { readFile } from "fs/promises";
import Link from "next/link";
import ArticleType from "@/app/types/article";
import { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } },
): Promise<Metadata> {
  const file = await readFile(`${process.cwd()}/articles.json`, "utf8");
  const data = JSON.parse(file);
  const article = data.find((obj: ArticleType) => obj.link.includes(params.slug));
  return {
    title: article?.title || "Markéta Gregorová",
    description: article?.perex,
    openGraph: {
      title: article.title,
      description: article.perex,
      url: `https://www.gregorova.eu${article.link}`,
      type: "article",
      images: [
        {
          url: `https://www.gregorova.eu${article.img}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

const Article = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const file = await readFile(`${process.cwd()}/articles.json`, "utf8");
  const data = JSON.parse(file);
  const { slug } = await params;
  const article = data.find((obj: ArticleType) => obj.link.includes(slug));
  const markup = { __html: article.content };
  const baseUrl = "www.gregorova.eu";
  const urlForSharing = `${baseUrl}${article.link}`;

  return (
    <div className="bg-beige">
      <HeaderMobile />
      <Header />
      <main className="text-medium-pink mt-4 sm:mt-6">

        <script async src="https://platform.twitter.com/widgets.js" />
        <div id="fb-root" />
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/cs_CZ/sdk.js#xfbml=1&version=v22.0" />

        <div className="flex flex-col main-width mx-auto mb-10 sm:mb-12 md:mb-16 2xl:mb-20 3xl:mb-26">
          <div className="flex flex-col gap-1 border-b border-light-pink pb-4 mb-3 sm:pb-5 lg:mb-5 lg:mt-5 lg:gap-2 2xl:gap-3 2xl:mb-6 2xl:pb-8">
            <Link
              href="/clanky"
              className="text-white bg-medium-pink hover:text-medium-pink hover:bg-light-pink transition-colors duration-100 rounded-full text-sm  font-semibold italic text-center w-fit h-fit px-4 py-1 mr-6 md:text-base lg:text-lg 2xl:text-xl 3xl:px-7 3xl:py-2.5"
            >
              zpět na články
            </Link>
            <div className="ml-4 italic text-sm md:text-base lg:text-lg 2xl:text-xl">
              {article.date}
            </div>
          </div>
          <h1 className="font-heading text-4xl mb-3 sm:text-5xl sm:w-110ěwqsačšesrěqšwečěwšeč+ěěeeěšěě sm:mx-auto md:text-6xl md:w-162 md:mb-4 lg:text-7xl lg:w-196 2xl:text-8xl 2xl:w-270 3xl:text-9xl 3xl:w-350 3xl:mb-8">
            {article.title}
          </h1>
          <div className="font-bold leading-[1.39] mb-2 text-lg sm:w-94 sm:mx-auto sm:mb-1 md:w-110 md:text-xl md:w-120 md:mb-2 lg:text-2xl lg:w-144 2xl:text-3xl 2xl:w-180 3xl:text-4xl 3xl:w-210">
            {article.perex}
          </div>
          <article dangerouslySetInnerHTML={markup} className="article" />
          <div className="flex justify-between items-center sm:w-100 sm:mx-auto sm:mt-2 md:w-120 md:mt-4 lg:w-144 2xl:w-174 3xl:w-214">
            <Link
              href="/clanky"
              className="text-white bg-medium-pink hover:text-medium-pink hover:bg-light-pink transition-colors duration-100 rounded-full text-sm  font-semibold italic text-center w-fit h-fit px-4 py-1 mr-6 md:text-base lg:text-lg 2xl:text-xl 3xl:px-7 3xl:py-2.5"
            >
              zpět na články
            </Link>
            <div className="flex items-center gap-4">
              <div>
                <a
                  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                  className="twitter-share-button"
                  data-show-count="false"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tweet
                </a>
              </div>

              <div
                className="fb-share-button self-center"
                data-href="https://www.gregorova.eu"
                data-layout=""
                data-size=""
              >
                <a
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlForSharing)}`}
                  className="fb-xfbml-parse-ignore"
                  rel="noreferrer"
                >
                  Sdílet
                </a>
              </div>

            </div>
          </div>

        </div>
      </main>

    </div>
  );
};

export default Article;
