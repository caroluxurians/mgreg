const LabelDark = ({ content }: { content: string }) => {
  return (
    <div
      className="w-auto text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]xl:text-[24px] italic bg-dark-pink border border-white rounded-full px-5 py-1 sm:px-6 w-fit"
    >
      {content}
    </div>
  );
};

export default LabelDark;
