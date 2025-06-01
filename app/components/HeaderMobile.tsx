import classNames from "classnames";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

type HeaderMobileProps = {
  textColor?: string
  borderColor?: string
};

const HeaderMobile = ({ textColor = "text-medium-pink", borderColor = "border-medium-pink" }: HeaderMobileProps) => {
  return (
    <header className="flex md:hidden">
      <div className={classNames(`flex justify-between items-center w-[350px] sm:w-[560px] mt-4 mx-auto border-b ${borderColor}`)}>
        <Link href="/">
          <div className={classNames(`font-heading hover:text-[#DF7AAE] ${textColor} text-[25px] tracking-[0.25px] sm:text-[30px]`)}>
            Markéta Gregorová
          </div>
        </Link>
        <HamburgerMenu borderColor={borderColor} />
      </div>
    </header>
  );
};

export default HeaderMobile;
