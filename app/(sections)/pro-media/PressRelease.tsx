const PressRelease = ({ index }: { index: number }) => {
  return (
    <div className="flex items-center border-b border-red-pink justify-between">
      <div className="font-heading text-[72px] ml-2 mr-7 w-4 sm:text-[84px]">{index}
      </div>
      <div className="text-[14px] font-bold w-80 sm:text-[18px]">
        „Pravda bolí“ – startuje kampaň europoslankyně Gregorové věnovaná dezinformacím
      </div>
      <div className="flex flex-col text-[12px] italic w-25 items-end gap-2 sm:text-[16px] pr-1">
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
