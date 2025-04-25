const PressRelease = ({ index }: { index: number }) => {
  return (
    <div className="flex items-center border-b border-red-pink justify-between md:pl-2 md:pb-4 xl:h-38 3xl:h-44 3xl:pb-5">
      <div className="font-heading text-center text-[72px] ml-2 mr-7 w-4 sm:text-[84px] md:text-[72px] md:w-5 xl:text-[100px] xl:w-10 2xl:mr-2 2xl:mb-4">
        {index}
      </div>
      <div className="text-[14px] font-bold w-80 sm:text-[18px] md:text-[16px] xl:text-[18px] xl:w-90 2xl:text-[24px]/[34px] 2xl:w-110 3xl:w-140">
        „Pravda bolí“ – startuje kampaň europoslankyně Gregorové věnovaná dezinformacím
      </div>
      <div className="flex flex-col text-[12px] italic w-25 items-end gap-2 sm:text-[16px] pr-1 md:hidden lg:flex lg:mt-3 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 2xl:mb-6 2xl:gap-3 3xl:text-[20px] 3xl:w-auto 3xl:gap-5 3xl:mt-10">
        <div className="text-white bg-medium-pink hover:text-medium-pink hover:bg-light-pink transition-colors duration-100 rounded-full font-semibold text-center w-fit px-4 py-1 3xl:px-7 3xl:py-2.5">
          číst
        </div>
        <div>
          8. 10. 2020
        </div>
      </div>
    </div>
  );
};

export default PressRelease;
