import { readFile } from "fs/promises";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import ArticleType from "@/app/types/article";
import ArticlePreview from "./ArticlePreview";
import Sticker from "../pro-media/Sticker";
import Pagination from "./Pagination";

const Clanky = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const file = await readFile(`${process.cwd()}/articles.json`, "utf8");
  const data = JSON.parse(file);

  const numberOfArticles = data.length;
  const page = Number(searchParams.page) || 1;
  const perPage = 10;

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const paginatedArticles = data.slice(start, end);

  return (
    <div className="bg-beige">
      <HeaderMobile />
      <Header />
      <main className="flex flex-col">
        <div className="main-width mx-auto relative">
          <div className="font-heading title-font-size text-medium-pink border-b border-light-pink mt-5 mb-7 pb-3 md:pb-4 md:mt-6 lg:mt-9 lg:mb-8 lg:pb-6">
            Moje články
          </div>
          {page === 1

            && (
              <div className="absolute top-38 -left-2 sm:top-42 md:top-26 lg:top-32 lg:-left-5 xl:top-35 xl:-left-11 2xl:top-42 3xl:top-46">
                <Sticker
                  backgroundColor="bg-[#FCDBB4]"
                  textColor="text-[#8D134A]"
                  outlineColor="outline-[#FCDBB4]"
                  rotate="-rotate-30"
                  textSize="text-[22px]/[22px] tracking-wide xl:text-[28px]/[30px] 2xl:text-[32px]/[34px]"
                  additionalStyles="pt-1 w-14 xl:pt-2 xl:pl-1"
                  content={(
                    <>
                      Nejnovější <br />
                      článek
                    </>
                  )}
                />
              </div>
            )}
          <div className="flex flex-col gap-6 mb-7 mx-1 sm:mb-8 md:mb-10 2xl:mb-12">
            {paginatedArticles.map((article: ArticleType) => (
              <ArticlePreview key={article.id} article={article} />
            ))}
          </div>
          <Pagination numberOfArticles={numberOfArticles} />
        </div>
      </main>
    </div>
  );
};

export default Clanky;
