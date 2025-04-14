import Image from "next/image";
import Link from "next/link";
import ArticleType from "@/app/types/article";

const ArticlePreview = ({ article }: { article: ArticleType }) => {
  const perexPreview = (text: string, maxLength: number = 120): string => {
    if (!text) return "";

    if (text.length <= maxLength) return text;

    const sliced = text.slice(0, maxLength);
    const lastSpace = sliced.lastIndexOf(" ");

    return lastSpace > 0 ? `${sliced.slice(0, lastSpace)}…` : `${sliced}…`;
  };
  const preview = perexPreview(article.perex);
  const previewS = perexPreview(article.perex, 200);
  const previewL = perexPreview(article.perex, 100);

  return (
    <div className="text-medium-pink grid grid-cols-2 gap-3 border-b border-light-pink pb-6 sm:gap-4 sm:pb-6 md:flex md:justify-between lg:w-200 xl:w-210 2xl:w-250 2xl:pb-8 2xl:pt-1">
      <div className="font-black col-span-2 text-[15px]/[20px] sm:text-[18px]/[26px] sm:ml-3 md:hidden">
        {article.title}
      </div>
      <div className="place-self-center md:place-self-start">
        <Image
          src={article.img}
          width={420}
          height={281}
          alt="article cover image"
          unoptimized
          className="rounded-[40] sm:rounded-[56] md:rounded-[50] lg:rounded-[50] xl:rounded-[52] 2xl:rounded-[60] w-40 h-30 object-cover object-top sm:w-60 sm:h-40 md:w-44 md:h-30 lg:w-54 lg:h-36 xl:w-58 xl:h-38 2xl:w-68 2xl:h-46"
        />
      </div>
      <div className="text-[14px]/[20px] w-40 sm:hidden">
        {preview}
      </div>
      <div className="text-[16px]/[24px] w-60 hidden sm:flex md:hidden">
        {previewS}
      </div>
      <div className="place-self-start self-end ml-2 italic flex flex-col items-center text-[14px] gap-1 sm:text-[16px] md:self-start xl:text-[18px] 2xl:text-[19px]">
        {article.date}
      </div>
      <div className="hidden md:flex flex-col w-70 gap-2 lg:w-74 xl:w-82 2xl:w-90 2xl:gap-4 2xl:mr-14">
        <div className="hidden md:flex font-black text-[16px]/[22px] lg:w-70 lg:text-[18px]/[24px] xl:text-[20px]/[26px] xl:w-74 2xl:text-[22px]/[28px] 2xl:w-98">
          {article.title}
        </div>
        <div className="hidden md:flex lg:hidden text-[15px]/[22px]">
          {preview}
        </div>
        <div className="hidden lg:flex text-[16px] w-74 xl:w-82 xl:text-[18px]/[25px] 2xl:text-[19px]">{previewL}</div>
      </div>
      <Link
        href={`/clanky${article.link}`}
        className="bg-medium-pink rounded-full text-[14px] text-white font-semibold italic text-center w-fit h-fit place-self-end pr-4 pl-3.5 py-1 mr-6 sm:text-[16px] md:self-start lg:mt-1 xl:text-[17px] xl:mt-0 xl:pr-4.5 xl:pl-4 xl:px-4.5 2xl:text-[19px] 2xl:mt-1 3xl:px-7 3xl:py-2.5"
      >
        číst
      </Link>
    </div>
  );
};

export default ArticlePreview;
