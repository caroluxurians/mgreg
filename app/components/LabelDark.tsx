const LabelDark = ({ content }: { content: string }) => {
  return (
    <div
      className="w-auto text-[15px] sm:text-[24px] italic bg-dark-pink border border-white rounded-full px-5 py-1"
    >
      {content}
    </div>
  );
};

export default LabelDark;
