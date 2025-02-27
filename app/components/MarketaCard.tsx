import Image from "next/image";

const MarketaCard = () => {
  return (
    <div className="flex gap-[21px] text-[20px] leading-[25px] font-light">
      <div>
        <Image src="/marketa-icon.png" height={80} width={80} alt="ikona Markéty" unoptimized />
      </div>
      <div className="flex flex-col gap-[25px]">
        <div className="flex flex-col">
          <span className="text-[24px] font-bold">Markéta Gregorová</span>
          <span>Europoslankyně</span>
        </div>
        <div className="flex flex-col">
          <span>
            marketa.gregorova@europarl.europa.eu
          </span>
          <span>marketa.gregorova@pirati.cz</span>
        </div>

      </div>
    </div>
  );
};

export default MarketaCard;
