import { readFile } from "fs/promises";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import ArticleType from "@/app/types/article";
import ArticlePreview from "./ArticlePreview";
import Sticker from "../pro-media/Sticker";

const Clanky = async () => {
  const file = await readFile(`${process.cwd()}/articles.json`, "utf8");
  const data = JSON.parse(file);
  console.log(data);

  return (
    <div className="bg-beige">
      <HeaderMobile />
      <Header />
      <main className="flex flex-col">
        <div className="main-width mx-auto relative">
          <div className="font-heading title-font-size text-medium-pink border-b border-light-pink my-7 pb-3 md:pb-4 lg:mt-9 lg:mb-8 lg:pb-6">
            Moje články
          </div>
          <div className="absolute top-38 -left-2 sm:top-42 md:top-26 lg:top-32 lg:-left-5">
            <Sticker
              backgroundColor="bg-[#FCDBB4]"
              textColor="text-[#8D134A]"
              outlineColor="outline-[#FCDBB4]"
              rotate="-rotate-30"
              textSize="text-[22px]/[22px] tracking-wide"
              additionalStyles="pt-1 w-14"
              content={(
                <>
                  Nejnovější <br />
                  článek
                </>
              )}
            />
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
