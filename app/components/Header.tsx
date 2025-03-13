import classNames from "classnames";
import SocialsSet from "./SocialsSet";

export const sectionsMobile = ["Pro média", "Moje práce", "O mně", "Videa", "Články"];
const sectionsDesktop = ["Pro média", "Moje práce", "O mně", "Archiv"];

type HeaderProps = {
  display: string
  sectionsTextSize?: string
  headingTextSize?: string
  wrapperStyles?: string
};

const Header = ({
  display,
  sectionsTextSize = "md:text-[25px] md:tracking-[0.5px]",
  headingTextSize = "md:text-[30px] md:tracking-[0.3px]",
  wrapperStyles = "md:mt-6 md:mx-auto md:w-[650px] lg:w-[920px]",
}: HeaderProps) => {
  return (
    <header className={classNames(`${display} w-full`)}>
      <div
        className={classNames(`flex flex-col md:flex-row
        justify-between items-center
        relative font-heading bg-transparent text-dark-pink
        mx-5 mt-9 gap-3
        sm:mt-7
        ${wrapperStyles}
        lg:pt-0
        xl:h-auto xl:pt-4 xl:px-20
        2xl:w-[1267px] 2xl:mx-auto 2xl:px-0`)}
      >
        <div
          className={classNames(`text-[62px] tracking-[0.62px]
          sm:text-[68px] sm:tracking-[0.68px]
          ${headingTextSize}
          2xl:mx-0
          leading-none`)}
        >
          Markéta Gregorová
        </div>

        <div
          className={classNames(`flex items-center leading-none
        text-[24px] tracking-[0.48px]
        gap-[11px] sm:gap-4
        md:gap-6 md:items-end ${sectionsTextSize}
        lg:gap-6 lg:text-[26px] lg:tracking-[0.6px]
        2xl:text-[30px] 2xl:tracking-[0.6px] 2xl:gap-10`)}
        >
          {sectionsMobile.map((section) => (
            <div className="flex md:hidden" key={section}>{section}</div>
          ))}

          {sectionsDesktop.map((section) => (
            <div className="hidden md:flex" key={section}>{section}</div>
          ))}
        </div>

        <SocialsSet color="dark" classNames="hidden lg:flex 2xl:pr-0" />
      </div>

    </header>
  );
};

export default Header;

/*
<div className="text-[40px] absolute left-[130px] top-[38px]">Markéta Gregorová</div>
<div
 className="flex absolute left-[726px] top-[30px] gap-[40px] h-[49px] w-[477px] px-[30px] py-[21px]"
      >
         <div className="flex items-center justify-center w-auto h-auto">
*/
