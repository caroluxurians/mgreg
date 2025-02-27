import Image from "next/image";

const sectionsMobile = ["Pro média", "Moje práce", "O mně", "Videa", "Články"];
const sectionsDesktop = ["Pro média", "Moje práce", "O mně", "Archiv"];

const Header = () => {
  return (
    <header
      className="flex flex-col sm:flex-row
      justify-between items-center
      h-[9.4rem]
      relative font-heading bg-light-pink text-dark-pink sm:h-20
      2xl:px-[100px]"
    >
      <div
        className="text-[4rem] mx-[1.25rem] mt-[2.25rem] mb-[23px]
      sm:text-[40px]
      leading-none tracking-[0.4px]"
      >
        Markéta Gregorová
      </div>

      <div
        className="flex items-center leading-none
        px-[2.15rem] gap-[11px] tracking-[0.48px]
       sm:tracking-[0.6px] sm:h-[49px] sm:w-[477px] sm:gap-[40px] sm:px-[30px] sm:py-[21px]"
      >
        {sectionsMobile.map((section) => (
          <div className="sm:hidden text-[1.5rem]" key={section}>{section}</div>
        ))}

        {sectionsDesktop.map((section) => (
          <div className="hidden sm:flex text-[1.5rem] sm:text-[30px]" key={section}>{section}</div>
        ))}
      </div>

      <div className="hidden sm:inline-flex flex-start gap-[30px] w-[173.54] h-[21.38]">
        <Image src="/instagram.svg" height={21} width={21} alt="instagram icon" />
        <Image src="/x.svg" height={21.34} width={23} alt="x icon" />
        <Image src="/youtube.svg" height={21.38} width={30.54} alt="youtube icon" />
        <Image src="/facebook.svg" height={21} width={9} alt="facebook icon" />
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
