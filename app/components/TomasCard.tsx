import Image from "next/image";

const TomasCard = () => {
  return (
    <div className="hidden sm:flex gap-[21px] text-[20px] leading-[25px] font-light">
      <div>
        <Image src="/tomas-icon.png" height={80} width={80} alt="ikona Tomáše" unoptimized />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <span className="text-[24px] font-semibold">Tomáš Polák</span>
          <span className="leading-[25px]">PR specialista</span>
        </div>
        <span className="leading-[11px]">mediální vystoupení a komentáře</span>
        <div className="flex flex-col">
          <span className="leading-[11px]">
            tomas.Polak@europarl.europa.eu
          </span>
          <span className="leading-[25px]">+420 728 035 059</span>
        </div>

      </div>
    </div>
  );
};

export default TomasCard;
