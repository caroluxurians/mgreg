import Image from "next/image";

const Article = () => {
  return (
    <div className="text-medium-pink grid grid-cols-2 gap-3 border-b border-light-pink pb-6">
      <div className="font-black col-span-2 text-[15px]/[18px]">
        Odkaz Františky Plamínkové: Proč bychom se měly hrdě označovat za feministky
      </div>
      <div className="w-40 place-self-center">
        <Image
          src="/article-placeholder-image.png"
          width={420}
          height={281}
          alt="article cover image"
          unoptimized
          className="rounded-[36]"
        />
      </div>
      <div className="text-[14px] w-40">
        Před 149 lety se narodila ikona nejen
        československých feministických dějin,
        politička a novinářka Františka Plamínková..
      </div>
      <div className="place-self-start ml-2 italic flex flex-col items-center text-[14px] gap-1 -mt-2">
        <div>
          2. 5. 2024
        </div>
        <div>
          <div className="border border-light-pink rounded-full text-center w-fit px-4">
            lidská práva
          </div>
        </div>
      </div>
      <div className="bg-medium-pink rounded-full text-[14px] text-white font-semibold italic text-center w-fit h-fit place-self-end px-4 py-1 mr-6 3xl:px-7 3xl:py-2.5">
        číst
      </div>
    </div>
  );
};

export default Article;
