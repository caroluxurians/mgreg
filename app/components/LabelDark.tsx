const LabelDark = ({ content }: { content: string }) => {
  return (
    <div
      className="w-auto text-white text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[24px] italic bg-medium-pink border border-white rounded-full px-5 py-1 sm:px-7 w-fit"
    >
      {content}
    </div>
  );
};

export default LabelDark;
