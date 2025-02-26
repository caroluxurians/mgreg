import Image from "next/image";

const MarketaCard = () => {
  return (
    <div className="flex gap-[21px] absolute left-[100px]">
      <div>
        <Image src="/marketa-icon.png" height={75} width={75} alt="ikona Markéty" unoptimized />
      </div>
      <div className="flex flex-col">
        <span className="text-[25px] font-bold">Markéta Gregorová</span>
        <span>Europoslankyně</span>
        <span>
          marketa.gregorova@europarl.europa.eu
        </span>
        <span>marketa.gregorova@pirati.cz</span>
      </div>
    </div>
  );
};

export default MarketaCard;
