import Image from "next/image";
import Link from "next/link";
import ArticleType from "@/app/types/article";

const ArticlePreview = ({ article }: { article: ArticleType }) => {
  return (
    <div className="text-medium-pink grid grid-cols-2 gap-3 border-b border-light-pink pb-6 md:flex">
      <div className="font-black col-span-2 text-[15px]/[18px]">
        {article.title}
      </div>
      <div className="w-40 place-self-center md:order-1">
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
        {article.perex}
      </div>
      <div className="place-self-start ml-2 italic flex flex-col items-center text-[14px] gap-1 -mt-2">
        <div>
          {article.date}
        </div>
        {/*
        <div>
          <div className="border border-light-pink rounded-full text-center w-fit px-4">
            lidská práva
          </div>
        </div>
        */}
      </div>
      <Link
        href={`/clanky${article.link}`}
        className="bg-medium-pink rounded-full text-[14px] text-white font-semibold italic text-center w-fit h-fit place-self-end px-4 py-1 mr-6 3xl:px-7 3xl:py-2.5"
      >
        číst
      </Link>
    </div>
  );
};

export default ArticlePreview;
