import classNames from "classnames";
import SocialsSet from "./SocialsSet";

export const sections = ["Pro média", "Moje práce", "O mně", "Články"];

type HeaderProps = {
  titleColor?: string
  sectionsColor?: string
  colorTheme?: string
};

const Header = ({ titleColor = "text-medium-pink", sectionsColor = "text-medium-pink", colorTheme = "dark" }: HeaderProps) => {
  return (
    <header className="w-full hidden md:flex">
      <div
        className="main-width flex flex-row
        justify-between items-baseline
        relative font-heading bg-transparent
        mx-5 mt-9 gap-3
        sm:mt-7
        md:mt-6 md:mx-auto
        lg:pt-0
        xl:h-auto
        2xl:mx-auto 2xl:px-0"
      >
        <div
          className={classNames(`${titleColor} text-[62px] tracking-[0.62px]
          sm:text-[68px] sm:tracking-[0.68px]
          md:text-[30px] md:tracking-[0.3px] xl:text-[40px] xl:tracking-[0.4px]
          2xl:mx-0
          leading-none`)}
        >
          Markéta Gregorová
        </div>

        <div
          className={classNames(`${sectionsColor} flex items-center leading-none
        text-[24px] tracking-[0.48px]
        gap-[11px] sm:gap-4
        md:gap-6 md:items-end md:text-[25px] md:tracking-[0.5px]
        lg:gap-6 lg:text-[26px] lg:tracking-[0.6px]
        xl:gap-7 xl:text-[30px] xl:tracking-[0.8px]
        2xl:text-[30px] 2xl:tracking-[0.3px] 2xl:gap-10
        3xl:`)}
        >
          {sections.map((section) => (
            <div className="flex" key={section}>{section}</div>
          ))}
        </div>
        <SocialsSet color={colorTheme} classNames="hidden lg:flex 2xl:pr-0" />
      </div>
    </header>
  );
};

export default Header;
