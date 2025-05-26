import Image from "next/image";

const TomasCard = () => {
  return (
    <div className="md:order-3 flex gap-[21px] text-[20px] leading-[25px] font-light xl:gap-3 2xl:gap-6">
      <div className="lg:hidden xl:block w-[65px] sm:w-[70px] xl:w-[65px] 2xl:w-[80px] 2xl:mt-2">
        <Image
          src="/tomas-footer-icon.png"
          height={80}
          width={80}
          alt="ikona Tomáše"
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-3 xl:gap-2 2xl:gap-3">
        <div className="flex flex-col">
          <div className="text-[20px]/[19px] sm:text-[22px]/[20px] xl:text-[20px]/[19px] 2xl:text-[24px]/[25px] font-bold">
            Tomáš Polák
          </div>
          <div className="text-[14px]/[19px] sm:text-[17px]/[25px]
          xl:text-[17px]/[25px] 2xl:text-[20px]/[25px]"
          >
            PR manažer
          </div>
          <div className="text-[14px]/[25px] sm:text-[17px]/[27px] xl:text-[16px]/[22px] 2xl:text-[18px]/[23px]">
            mediální vystoupení a komentáře
          </div>
        </div>
        <div className="text-[14px]/[19px] sm:text-[17px]/[23px] xl:text-[16px]/[22px] 2xl:text-[18px]/[23px] underline">
          <div>
            tomas.polak@europarl.europa.eu
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
