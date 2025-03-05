import SocialsSet from "./SocialsSet";

const sectionsMobile = ["Pro média", "Moje práce", "O mně", "Videa", "Články"];
const sectionsDesktop = ["Pro média", "Moje práce", "O mně", "Archiv"];

const Header = () => {
  return (
    <header
      className="flex flex-col md:flex-row
      justify-between items-center
      relative font-heading bg-transparent text-dark-pink
      md:h-20 md:pt-4
      2xl:px-[100px]"
    >
      <div
        className="text-[62px] tracking-[0.62px] mx-5 mt-9 sm:mt-7 md:mx-7 pb-[11.5px] md:p-0 md:m-0
        md:text-[40px] md:tracking-[0.4px]
        leading-none"
      >
        Markéta Gregorová
      </div>

      <div
        className="flex items-center leading-none
        text-[24px] tracking-[0.48px] md:text-[30px] md:tracking-[0.6px]
        gap-[11px] sm:gap-4
          md:gap-9 md:pr-7 md:py-[21px] md:items-end"
      >
        {sectionsMobile.map((section) => (
          <div className="flex md:hidden" key={section}>{section}</div>
        ))}

        {sectionsDesktop.map((section) => (
          <div className="hidden md:flex" key={section}>{section}</div>
        ))}
      </div>

      <SocialsSet color="dark" classNames="hidden lg:flex lg:pr-7" />

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
