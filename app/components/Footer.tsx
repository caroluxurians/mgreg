import MarketaCard from "./MarketaCard";
import SocialsSet from "./SocialsSet";
import TomasCard from "./TomasCard";

const Footer = () => {
  return (
    <footer
      className="bg-dark-pink flex flex-col gap-9 items-start text-light-pink pb-10 pl-7
      sm:h-[250px] sm:grid sm:grid-cols-[2fr_2fr_2fr] sm:px-[100px]"
    >
      <MarketaCard />
      <TomasCard />
      <SocialsSet color="light" classNames="flex sm:hidden pl-22" />
      <div className="grid text-[14px]/[19px] sm:text-[20px]/[25px] pl-22">
        <span>BRUXELLES</span>
        <span>Parlement européen</span>
        <span>Bât. Altiero Spinelli, 08G101</span>
        <span>60, rue Wiertz / Wiertzstraat 60</span>
        <span>B-1047 Bruxelles/Brussel</span>
        <span>tel: 0032 2 28 38334 (kancelář)</span>
      </div>
    </footer>

  );
};

export default Footer;
