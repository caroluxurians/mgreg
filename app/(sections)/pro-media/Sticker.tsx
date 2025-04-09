import classNames from "classnames";

type StickerProps = {
  backgroundColor: string
  textColor: string
  borderColor?: string
  outlineColor?: string
  content: React.ReactNode
  rotate?: string
  textSize?: string
  additionalStyles?: string
};

const Sticker = ({ backgroundColor, textColor, borderColor = "border-medium-pink", outlineColor = "outline-beige", content, rotate = "rotate-19", textSize = "text-[26px]/[22px] xl:text-[32px]/[28px] 2xl:text-[40px]/[34px]", additionalStyles = "" }: StickerProps) => {
  return (
    <div className={classNames(`w-22 h-22 rounded-full ${backgroundColor} ${additionalStyles} border ${borderColor} outline-3 ${outlineColor} flex items-center justify-center xl:w-27 xl:h-27 2xl:w-32 2xl:h-32`)}>
      <div className={classNames(`${textColor} font-heading text-center ${textSize} ${rotate} `)}>
        {content}
      </div>
    </div>
  );
};

export default Sticker;
