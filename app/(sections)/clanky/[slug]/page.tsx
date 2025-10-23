import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import ArticleType from "@/app/types/article";
import { Metadata } from "next";
import data from "@/app/articleData";
import XShareButton from "./XShareButton";
import FacebookShareButton from "./FacebookShareButton";
import { BackToArticlesButton } from "./BackToArticlesButton";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = data.find((obj: ArticleType) => obj.link.includes(slug));
  return {
    title: article!.title || "Markéta Gregorová",
    description: article!.perex,
    openGraph: {
      title: article!.title,
      description: article!.perex,
      url: `https://www.gregorova.eu${article!.link}`,
      type: "article",
      images: [
        {
          url: `https://www.gregorova.eu${article!.img}`,
          width: 1200,
          height: 630,
          alt: article!.title,
        },
      ],
    },
  };
}

const Article = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const article = data.find((obj: ArticleType) => obj.link.includes(slug));
  const markup = { __html: article!.content };
  const baseUrl = "www.gregorova.eu";
  const urlForSharing = `${baseUrl}${article!.link}`;

  return (
    <div className="bg-beige">
      <HeaderMobile />
      <Header />
      <main className="text-medium-pink mt-4 md:mt-6">
        <div id="fb-root" />
        <div className="flex flex-col main-width mx-auto mb-10 sm:mb-12 md:mb-16 2xl:mb-20 3xl:mb-26">
          <div className="flex flex-col gap-2 border-b border-light-pink pb-3 mb-3 lg:mb-5 lg:mt-5 lg:gap-2 2xl:gap-3 2xl:mb-6 2xl:pb-8">
            <BackToArticlesButton />
            <div className="ml-4 italic text-sm md:text-base lg:text-lg 2xl:text-xl">
              {article!.date}
            </div>
          </div>
          <h1 className="font-heading text-4xl mb-3 sm:text-5xl sm:w-110 sm:mx-auto md:text-6xl md:w-162 md:mb-4 lg:text-7xl lg:w-196 2xl:text-8xl 2xl:w-270 3xl:text-9xl 3xl:w-350 3xl:mb-8">
            {article!.title}
          </h1>
          <div className="font-bold leading-[1.39] mb-2 text-lg sm:w-94 sm:mx-auto sm:mb-1 md:w-110 md:text-xl md:w-120 md:mb-2 lg:text-2xl lg:w-144 2xl:text-3xl 2xl:w-180 3xl:text-4xl 3xl:w-210">
            {article!.perex}
          </div>
          {/* eslint-disable-next-line react/no-danger */}
          <article dangerouslySetInnerHTML={markup} className="article" />
          <div className="flex justify-between items-start sm:items-center sm:w-106 sm:mx-auto sm:mt-2 md:w-126 md:mt-4 lg:w-150 2xl:w-180 3xl:w-218">
            <BackToArticlesButton />
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <XShareButton url={urlForSharing} text={article!.title} />
              <FacebookShareButton url={urlForSharing} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Article;
