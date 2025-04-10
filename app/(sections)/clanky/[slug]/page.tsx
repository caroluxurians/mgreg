import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import { readFile } from "fs/promises";
import Link from "next/link";
import ArticleType from "@/app/types/article";

const Article = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const file = await readFile(`${process.cwd()}/articles.json`, "utf8");
  const data = JSON.parse(file);
  const { slug } = await params;
  const article = data.find((obj: ArticleType) => obj.link.includes(slug));
  // console.log("ble", article);
  const markup = { __html: article.content };

  return (
    <div className="bg-beige">
      <HeaderMobile />
      <Header />
      <main className="text-medium-pink mt-4">
        <div className="flex flex-col main-width mx-auto">
          <div className="flex flex-col gap-2 border-b border-light-pink pb-2 mb-4">
            <Link
              href="/clanky"
              className="bg-medium-pink rounded-full text-[14px] text-white font-semibold italic text-center w-fit h-fit px-4 py-1 mr-6 3xl:px-7 3xl:py-2.5"
            >
              zpět na články
            </Link>
            <div>{article.date}</div>
          </div>
          <h1 className="font-heading text-[35px]/[41px]">{article.title}</h1>
          <div className="font-bold">{article.perex}</div>
          <article dangerouslySetInnerHTML={markup} className="article" />
        </div>
      </main>

    </div>
  );
};

export default Article;
