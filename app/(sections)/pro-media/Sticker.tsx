import classNames from "classnames";

type StickerProps = {
  backgroundColor: string
  textColor: string
  content: React.ReactNode
  additionalStyles?: string
};

const Sticker = ({ backgroundColor, textColor, content, additionalStyles = "" }: StickerProps) => {
  return (
    <div className={classNames(`w-22 h-22 rounded-full ${backgroundColor} ${additionalStyles} outline-3 outline-beige flex items-center justify-center xl:w-27 xl:h-27 2xl:w-32 2xl:h-32`)}>
      <div className={classNames(`${textColor} font-heading text-center text-[26px]/[22px] rotate-19 xl:text-[32px]/[28px] 2xl:text-[40px]/[34px]`)}>
        {content}
      </div>
    </div>
  );
};

export default Sticker;
