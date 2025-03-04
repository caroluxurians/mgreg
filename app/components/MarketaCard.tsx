import Image from "next/image";

const MarketaCard = () => {
  return (
    <div className="flex gap-[21px] leading-[25px] font-light pt-[39px]">
      <div>
        <Image
          src="/marketa-icon.png"
          height={80}
          width={80}
          className="h-[65px] w-[65px] sm:h-[80px] sm:w-[80px]"
          alt="ikona Markéty"
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-1 sm:gap-[25px]">
        <div className="flex flex-col">
          <div className="text-[20px]/[19px] sm:text-[24px]/[25px] font-bold">
            Markéta Gregorová
          </div>
          <div className="text-[14px]/[19px] sm:text-[20px]/[25px]">
            Europoslankyně
          </div>
        </div>
        <div className="flex flex-col text-[14px]/[20px] sm:text-[20px]/[25px] underline">
          <div>
            marketa.gregorova@europarl.europa.eu
          </div>
          <div>marketa.gregorova@pirati.cz</div>
        </div>

      </div>
    </div>
  );
};

export default MarketaCard;
