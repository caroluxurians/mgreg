import { headers } from "next/headers";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import Link from "next/link";
import ArticleType from "@/app/types/article";
import { Metadata } from "next";
import XShareButton from "./XShareButton";
import FacebookShareButton from "./FacebookShareButton";

export const runtime = "edge";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const headersList = await headers();
  const protocol = headersList.get("x-forwarded-proto");
  const host = headersList.get("x-forwarded-host");
  const file = await fetch(`${protocol}://${host}/articles.json`);
  const data = await file.json();
  const article = data.find((obj: ArticleType) => obj.link.includes(slug));
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
  const headersList = await headers();
  const protocol = headersList.get("x-forwarded-proto");
  const host = headersList.get("x-forwarded-host");
  const file = await fetch(`${protocol}://${host}/articles.json`);
  const data = await file.json();
  const { slug } = await params;
  const article = data.find((obj: ArticleType) => obj.link.includes(slug));
  const markup = { __html: article.content };
  const baseUrl = "www.gregorova.eu";
  const urlForSharing = `${baseUrl}${article.link}`;

  return (
    <div className="bg-beige">
      <HeaderMobile />
      <Header />
      <main className="text-medium-pink mt-4 md:mt-6">
        <div id="fb-root" />
        <div className="flex flex-col main-width mx-auto mb-10 sm:mb-12 md:mb-16 2xl:mb-20 3xl:mb-26">
          <div className="flex flex-col gap-2 border-b border-light-pink pb-3 mb-3 lg:mb-5 lg:mt-5 lg:gap-2 2xl:gap-3 2xl:mb-6 2xl:pb-8">
            <Link
              href="/clanky"
              className="flex items-center justify-center text-white bg-medium-pink hover:text-medium-pink hover:bg-light-pink transition-colors duration-100 rounded-full text-sm font-semibold italic text-center h-8 w-32 md:w-38 md:h-9 lg:w-44 lg:h-10.5 2xl:w-48 2xl:h-12 md:text-base lg:text-lg 2xl:text-xl"
            >
              zpět na články
            </Link>
            <div className="ml-4 italic text-sm md:text-base lg:text-lg 2xl:text-xl">
              {article.date}
            </div>
          </div>
          <h1 className="font-heading text-4xl mb-3 sm:text-5xl sm:w-110 sm:mx-auto md:text-6xl md:w-162 md:mb-4 lg:text-7xl lg:w-196 2xl:text-8xl 2xl:w-270 3xl:text-9xl 3xl:w-350 3xl:mb-8">
            {article.title}
          </h1>
          <div className="font-bold leading-[1.39] mb-2 text-lg sm:w-94 sm:mx-auto sm:mb-1 md:w-110 md:text-xl md:w-120 md:mb-2 lg:text-2xl lg:w-144 2xl:text-3xl 2xl:w-180 3xl:text-4xl 3xl:w-210">
            {article.perex}
          </div>
          {/* eslint-disable-next-line react/no-danger */}
          <article dangerouslySetInnerHTML={markup} className="article" />
          <div className="flex justify-between items-start sm:items-center sm:w-106 sm:mx-auto sm:mt-2 md:w-126 md:mt-4 lg:w-150 2xl:w-180 3xl:w-218">
            <Link
              href="/clanky"
              className="flex items-center justify-center text-white bg-medium-pink hover:text-medium-pink hover:bg-light-pink transition-colors duration-100 rounded-full text-sm font-semibold italic text-center h-8 w-32 md:w-38 md:h-9 lg:w-44 lg:h-10.5 2xl:w-48 2xl:h-12 md:text-base lg:text-lg 2xl:text-xl"
            >
              zpět na články
            </Link>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <XShareButton url={urlForSharing} text={article.title} />
              <FacebookShareButton url={urlForSharing} />
            </div>
          </div>

        </div>
      </main>

    </div>
  );
};

export default Article;
