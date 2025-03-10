import Image from "next/image";

const HeaderMobile = () => {
  return (
    <div className="flex justify-between items-center mx-5 mt-7 border-b-1 border-dark-pink">
      <div className="font-heading text-dark-pink text-[25px] tracking-[0.25px]">
        Markéta Gregorová
      </div>
      <Image src="/hamburger.png" height={10} width={25} alt="drop-down menu" />

    </div>
  );
};

export default HeaderMobile;
