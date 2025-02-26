import Image from "next/image";

const sections = ["Pro média", "Moje práce", "O mně", "Archiv"];

const Header = () => {
  return (
    <div className="flex justify-around relative font-heading text-dark-pink h-20 items-center">
      <div className="text-[40px] flex">Markéta Gregorová</div>

      <div
        className="flex items-center gap-[40px] h-[49px] w-[477px] px-[30px] py-[21px]"
      >
        {sections.map((section) => (
          <div className="text-[30px]">{section}</div>
        ))}
      </div>

      <div className="flex items-center justify-between w-[173.54] h-[21.38]">
        <Image src="/instagram.svg" height={21} width={21} alt="instagram icon" />
        <Image src="/x.svg" height={21.34} width={23} alt="x icon" />
        <Image src="/youtube.svg" height={21.38} width={30.54} alt="youtube icon" />
        <Image src="/facebook.svg" height={21} width={9} alt="facebook icon" />
      </div>

    </div>
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
