import Image from "next/image";

const TomasCard = () => {
  return (
    <div className="md:order-3 flex gap-[21px] text-[20px] leading-[25px] font-light">
      <div>
        <Image
          src="/tomas-icon.png"
          height={80}
          width={80}
          alt="ikona Tomáše"
          className="h-[65px] w-[65px] sm:h-[70px] sm:w-[70px] lg:h-[80px] lg:w-[80px]"
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-3 lg:gap-[25px]">
        <div className="flex flex-col">
          <div className="text-[20px]/[19px] sm:text-[22px]/[20px] lg:text-[24px]/[25px] font-bold">
            Tomáš Polák
          </div>
          <div className="text-[14px]/[19px] sm:text-[17px]/[25px] lg:text-[20px]/[25px]">
            PR specialista
          </div>
        </div>
        <div className="text-[14px]/[25px] sm:text-[17px]/[27px] lg:text-[20px]/[25px]">
          mediální vystoupení a komentáře
        </div>
        <div className="text-[14px]/[19px] sm:text-[17px]/[23px] lg:text-[20px]/[25px] underline">
          <div>
            tomas.Polak@europarl.europa.eu
          </div>
          <div>
            +420 728 035 059
          </div>
        </div>

      </div>
    </div>
  );
};

export default TomasCard;
