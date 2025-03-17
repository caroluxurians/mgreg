import Image from "next/image";

const MarketaContactCard = () => {
  return (
    <div className="flex w-[270px] h-auto relative border mx-auto">
      <Image
        src="/marketa-contact-card.png"
        height={432}
        width={325}
        alt="Markéta kontaktní karta"
        unoptimized
        className="rounded-[30px] w-full h-auto"
      />
      <div className="absolute top-6 left-6 flex flex-col">
        <div className="font-heading text-beige text-[40px]/[40px]">
          Markéta Gregorová
        </div>
        <div className="text-light-pink text-[18px]/[22px]">
          Europoslankyně
        </div>
      </div>
    </div>
  );
};

export default MarketaContactCard;
