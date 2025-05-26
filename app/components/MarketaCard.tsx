import Image from "next/image";

const MarketaCard = () => {
  return (
    <div className="md:order-1 flex gap-[21px] leading-[25px] font-light xl:gap-3 2xl:gap-6">
      <div className="lg:hidden xl:block w-[65px] sm:w-[70px] xl:w-[65px] 2xl:w-[80px] 2xl:mt-2">
        <Image
          src="/marketa-footer-icon.png"
          height={80}
          width={80}
          alt="ikona Markéty"
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-3 2xl:gap-5">
        <div className="flex flex-col">
          <div className="text-[20px]/[19px] sm:text-[22px]/[20px] xl:text-[20px]/[19px] 2xl:text-[24px]/[25px] font-bold">
            Markéta Gregorová
          </div>
          <div className="text-[14px]/[19px] sm:text-[17px]/[25px] xl:text-[17px]/[25px] 2xl:text-[20px]/[25px]">
            Europoslankyně
          </div>
        </div>
        <div className="flex flex-col text-[14px]/[20px] sm:text-[17px]/[22px] xl:text-[16px]/[22px] 2xl:text-[18px]/[23px] underline">
          <a href="mailto:marketa.gregorova@europarl.europa.eu" className="break-all">
            marketa.gregorova@europarl.europa.eu
          </a>
          <a href="mailto:marketa.gregorova@pirati.cz">
            marketa.gregorova@pirati.cz
          </a>
        </div>

      </div>
    </div>
  );
};

export default MarketaCard;
