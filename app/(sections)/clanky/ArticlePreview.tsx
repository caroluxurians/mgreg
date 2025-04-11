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

  return (
    <div className="text-medium-pink grid grid-cols-2 gap-3 border-b border-light-pink pb-6 sm:gap-4 sm:pb-6 md:flex md:justify-between">
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
          className="rounded-[40] sm:rounded-[56] md:rounded-[50] w-40 h-30 object-cover object-top sm:w-60 sm:h-40 md:w-44 md:h-30 lg:w-60 lg:h-40"
        />
      </div>
      <div className="text-[14px]/[20px] w-40 sm:hidden">
        {preview}
      </div>
      <div className="text-[16px]/[24px] w-60 hidden sm:flex md:hidden">
        {previewS}
      </div>
      <div className="place-self-start self-end ml-2 italic flex flex-col items-center text-[14px] gap-1 sm:text-[16px] md:self-start">
        {article.date}
      </div>
      <div className="hidden md:flex flex-col w-70 gap-2">
        <div className="font-black text-[16px]/[22px]">{article.title}</div>
        <div className="text-[15px]/[22px]">{preview}</div>
      </div>
      <Link
        href={`/clanky${article.link}`}
        className="bg-medium-pink rounded-full text-[14px] text-white font-semibold italic text-center w-fit h-fit place-self-end px-4 py-1 mr-6 sm:text-[16px] md:self-start 3xl:px-7 3xl:py-2.5"
      >
        číst
      </Link>
    </div>
  );
};

export default ArticlePreview;
