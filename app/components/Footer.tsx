import classNames from "classnames";
import MarketaCard from "./MarketaCard";
import SocialsSet from "./SocialsSet";
import TomasCard from "./TomasCard";

const Footer = ({ styles = "bg-medium-pink" }: { styles?: string }) => {
  return (
    <footer
      className={classNames(`${styles}`)}
    >
      <div className="main-width mx-auto py-6 md:py-10
       items-start text-light-pink
      grid gap-6
      md:grid-cols-[3fr_2fr]
      lg:grid-cols-[4fr_4fr_3fr]"
      >
        <MarketaCard />
        <TomasCard />
        <div
          className="md:order-2 lg:order-3 flex flex-col
        pl-[85px] sm:pl-[90px] md:pl-0
          text-[14px]/[19px] sm:text-[17px]/[22px] xl:text-[16px]/[22px] 2xl:text-[18px]/[23px]"
        >
          <span>Parlement européen</span>
          <span>Bât. Altiero Spinelli, 08G101</span>
          <span>60, rue Wiertz/Wiertzstraat 60</span>
          <span>B-1047 Bruxelles/Brussel</span>
          <span>tel: <a href="tel:+3222838334">+32 2 28 38334</a> (kancelář)</span>
          <SocialsSet color="light" classNames="flex mt-3" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
