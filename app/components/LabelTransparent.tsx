const LabelTransparent = ({ content }: { content: string }) => {
  return (
    <div className="w-auto text-[15px] sm:text-[16px] md:text-[17px] lg:text-[24px] italic border border-white rounded-full px-5 py-1 sm:px-6">
      {content}
    </div>
  );
};

export default LabelTransparent;
