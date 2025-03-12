import HamburgerMenu from "./HamburgerMenu";

const HeaderMobile = () => {
  return (
    <div className="sm:flex sm:justify-center md:hidden">
      <div className="flex justify-between items-end mx-5 mt-7 border-b-1 border-dark-pink sm:w-[560px] sm:mx-0 mt-0">
        <div className="font-heading text-dark-pink text-[25px] tracking-[0.25px] sm:text-[30px]">
          Markéta Gregorová
        </div>
        <HamburgerMenu />
      </div>

    </div>
  );
};

export default HeaderMobile;
