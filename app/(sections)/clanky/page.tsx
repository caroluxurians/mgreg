import { readFile } from "fs/promises";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import ArticleType from "@/app/types/article";
import ArticlePreview from "./ArticlePreview";

const Clanky = async () => {
  const file = await readFile(`${process.cwd()}/articles.json`, "utf8");
  const data = JSON.parse(file);
  console.log(data);

  return (
    <div className="bg-beige">
      <HeaderMobile />
      <Header />
      <main className="flex flex-col">
        <div className="main-width mx-auto">
          <div className="font-heading title-font-size text-medium-pink border-b border-light-pink my-7 pb-3">
            Moje články
          </div>
          <div className="flex flex-col gap-6 mb-6 mx-1">
            {data.map((article: ArticleType) => (
              <ArticlePreview key={article.id} article={article} />
            ))}
          </div>
          <div className="mb-10 flex justify-center">1 2 3 4 5 6</div>
        </div>
      </main>
    </div>
  );
};

export default Clanky;
