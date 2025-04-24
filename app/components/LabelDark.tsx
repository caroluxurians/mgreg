import Link from "next/link";

const LabelDark = ({ content, link }: { content: string, link: string }) => {
  return (
    <Link href={link} target="_blank">
      <div
        className="text-white bg-medium-pink hover:text-medium-pink hover:bg-white transition-colors duration-100 italic border border-white rounded-full px-5 py-1 w-fit text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[24px] sm:px-7"
      >
        {content}
      </div>
    </Link>
  );
};

export default LabelDark;
