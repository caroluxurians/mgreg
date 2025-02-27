import MarketaCard from "./MarketaCard";
import TomasCard from "./TomasCard";

const Footer = () => {
  return (
    <footer className="bg-dark-pink flex flex-col h-[200px] sm:h-[250px] text-light-pink sm:grid sm:grid-cols-[2fr_2fr_2fr] items-center sm:px-[100px]">
      <MarketaCard />
      <TomasCard />
      <div className="hidden sm:grid text-[20px] leading-[25px]">
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
