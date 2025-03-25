import classNames from "classnames";

type StickerProps = {
  backgroundColor: string
  textColor: string
  content: React.ReactNode
};

const Sticker = ({ backgroundColor, textColor, content }: StickerProps) => {
  return (
    <div className={classNames(`w-22 h-22 rounded-full ${backgroundColor} border-3 border-beige flex items-center justify-center xl:w-27 xl:h-27`)}>
      <div className={classNames(`${textColor} font-heading text-center text-[26px]/[22px] rotate-19 xl:text-[32px]/[28px]`)}>
        {content}
      </div>
    </div>
  );
};

export default Sticker;
