import Image from "next/image";

const MarketaCard = () => {
  return (
    <div className="md:order-1 flex gap-[21px] leading-[25px] font-light pt-10 lg:pt-7">
      <div>
        <Image
          src="/marketa-icon.png"
          height={80}
          width={80}
          alt="ikona Markéty"
          className="h-[65px] w-[65px] sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]"
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-3 xl:gap-[25px]">
        <div className="flex flex-col">
          <div className="text-[20px]/[19px] sm:text-[22px]/[20px] xl:text-[24px]/[25px] font-bold">
            Markéta Gregorová
          </div>
          <div className="text-[14px]/[19px] sm:text-[17px]/[25px] xl:text-[20px]/[25px]">
            Europoslankyně
          </div>
        </div>
        <div className="flex flex-col text-[14px]/[20px] sm:text-[17px]/[22px] xl:text-[20px]/[25px] underline">
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
