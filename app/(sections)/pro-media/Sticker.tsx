import classNames from "classnames";

type StickerProps = {
  backgroundColor: string
  textColor: string
  content: React.ReactNode
};

const Sticker = ({ backgroundColor, textColor, content }: StickerProps) => {
  return (
    <div className={classNames(`w-22 h-22 rounded-full ${backgroundColor} border-2 border-beige flex items-center justify-center`)}>
      <div className={classNames(`${textColor} font-heading text-center text-[26px]/[22px] rotate-19`)}>
        {content}
      </div>
    </div>
  );
};

export default Sticker;
