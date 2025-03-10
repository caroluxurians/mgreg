import HamburgerMenu from "./HamburgerMenu";

const HeaderMobile = () => {
  return (
    <div className="flex justify-between items-end mx-5 mt-7 border-b-1 border-dark-pink">
      <div className="font-heading text-dark-pink text-[25px] tracking-[0.25px]">
        Markéta Gregorová
      </div>
      <HamburgerMenu />

    </div>
  );
};

export default HeaderMobile;
