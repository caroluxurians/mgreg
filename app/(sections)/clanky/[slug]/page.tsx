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
      <main className="text-medium-pink mt-4">
        <script async src="https://platform.twitter.com/widgets.js" />
        <div id="fb-root" />
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/cs_CZ/sdk.js#xfbml=1&version=v22.0" />
        <div className="flex flex-col main-width mx-auto mb-10">
          <div className="flex flex-col gap-2 border-b border-light-pink pb-4 mb-4">
            <Link
              href="/clanky"
              className="bg-medium-pink rounded-full text-[14px] text-white font-semibold italic text-center w-fit h-fit px-4 py-1 mr-6 3xl:px-7 3xl:py-2.5"
            >
              zpět na články
            </Link>
            <div className="ml-4 italic">{article.date}</div>
          </div>
          <h1 className="font-heading text-[35px]/[41px] mb-3">{article.title}</h1>
          <div className="font-bold mb-4">{article.perex}</div>
          <article dangerouslySetInnerHTML={markup} className="article" />
          <div className="flex justify-between">
            <Link
              href="/clanky"
              className="bg-medium-pink rounded-full text-[14px] text-white font-semibold italic text-center w-fit h-fit px-4 py-1 mr-6 3xl:px-7 3xl:py-2.5"
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
                className="fb-share-button"
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
