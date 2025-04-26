import classNames from "classnames";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

type HeaderMobileProps = {
  textColor?: string
  borderColor?: string
};

const HeaderMobile = ({ textColor = "text-medium-pink", borderColor = "border-medium-pink" }: HeaderMobileProps) => {
  return (
    <div className="sm:flex sm:justify-center md:hidden">
      <div className={classNames(`flex justify-between items-end w-[350px] mx-auto mt-7 border-b ${borderColor} sm:w-[560px] sm:mx-0 mt-0`)}>
        <Link href="/">
          <div className={classNames(`font-heading hover:text-[#DF7AAE] ${textColor} text-[25px] tracking-[0.25px] sm:text-[30px]`)}>
            Markéta Gregorová
          </div>
        </Link>
        <HamburgerMenu borderColor={borderColor} />
      </div>
    </div>
  );
};

export default HeaderMobile;
