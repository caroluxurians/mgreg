const PressRelease = ({ index }: { index: number }) => {
  return (
    <div className="flex items-center border-b border-red-pink justify-between md:pl-2 md:pb-4 xl:h-38">
      <div className="font-heading text-center text-[72px] ml-2 mr-7 w-4 sm:text-[84px] md:text-[72px] md:w-5 xl:text-[100px] xl:w-10">
        {index}
      </div>
      <div className="text-[14px] font-bold w-80 sm:text-[18px] md:text-[16px] xl:text-[18px] xl:w-90">
        „Pravda bolí“ – startuje kampaň europoslankyně Gregorové věnovaná dezinformacím
      </div>
      <div className="flex flex-col text-[12px] italic w-25 items-end gap-2 sm:text-[16px] pr-1 md:hidden lg:flex lg:pt-3 lg:text-[14px] xl:text-[16px]">
        <div className="bg-medium-pink rounded-full text-white font-semibold text-center w-fit px-4 py-1">
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
