import classNames from "classnames";
import MarketaCard from "./MarketaCard";
import SocialsSet from "./SocialsSet";
import TomasCard from "./TomasCard";

const Footer = ({ styles = "bg-medium-pink" }: { styles?: string }) => {
  return (
    <footer
      className={classNames(`${styles}`)}
    >
      <div
        className="flex flex-col gap-9 items-start text-light-pink pb-10 pl-7 sm:pl-14
      md:grid md:grid-cols-[3fr_2fr] md:px-9 md:gap-12
      lg:grid lg:w-[800px] lg:mx-auto lg:px-0 lg:pt-4
      xl:grid-cols-[3fr_3fr_2fr] xl:gap-2 xl:w-[1067px] xl:mx-auto
      xl:h-[220px] xl:grid
      2xl:h-[260px] 2xl:grid-cols-[3fr_3fr_2fr] 2xl:w-[1267px] 3xl:w-[1660px] 3xl:grid-cols-3"
      >
        <MarketaCard />
        <TomasCard />
        <div
          className="md:order-2 xl:order-3 grid
          text-[14px]/[19px] sm:text-[17px]/[22px] xl:text-[16px]/[22px] 2xl:text-[18px]/[23px]
          pl-22 md:pl-0 md:pt-8 lg:pt-4 lg:pl-10 xl:pl-6 2xl:ml-4"
        >
          <span>BRUXELLES</span>
          <span>Parlement européen</span>
          <span>Bât. Altiero Spinelli, 08G101</span>
          <span>60, rue Wiertz / Wiertzstraat 60</span>
          <span>B-1047 Bruxelles/Brussel</span>
          <span>tel: +32 2 28 38334 (kancelář)</span>
          <SocialsSet color="light" classNames="flex mt-3" />
        </div>
      </div>

    </footer>

  );
};

export default Footer;
