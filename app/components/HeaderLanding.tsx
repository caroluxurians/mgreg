import SocialsSet from "./SocialsSet";

export const sectionsMobile = ["Pro média", "Moje práce", "O mně", "Videa", "Články"];
const sectionsDesktop = ["Pro média", "Moje práce", "O mně", "Archiv"];

const HeaderLanding = () => {
  return (
    <header className="flex justify-center bg-light-pink">
      <div
        className="flex flex-col md:flex-row
        justify-between items-baseline
        relative font-heading bg-transparent text-medium-pink
        mx-5 mt-9 gap-3
        sm:mt-6
        md:mx-10 md:w-full
        lg:pt-0
        xl:h-auto
        2xl:w-[1267px] 2xl:mx-auto 2xl:px-0"
      >
        <div
          className="text-[62px] tracking-[0.62px]
          sm:text-[68px] sm:tracking-[0.68px]
          md:text-[40px] md:tracking-[0.6px]
          2xl:mx-0
          leading-none"
        >
          Markéta Gregorová
        </div>

        <div
          className="flex leading-none
        text-[24px] tracking-[0.48px]
        gap-[11px] mx-auto sm:gap-4
        md:gap-6 md:items-end md:mx-0 md:text-[30px] md:tracking-[0.6px]
        lg:gap-6 lg:text-[26px] lg:tracking-[0.6px]
        xl:gap-7 xl:text-[30px] xl:tracking-[0.8px]
        2xl:text-[30px] 2xl:tracking-[0.3px] 2xl:gap-10
        3xl:"
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

export default HeaderLanding;
