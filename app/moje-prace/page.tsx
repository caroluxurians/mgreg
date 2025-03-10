import Image from "next/image";
import HeaderMobile from "../components/HeaderMobile";

const MojePrace = () => {
  return (
    <div className="h-screen max-h-screen bg-light-pink text-dark-pink">
      <HeaderMobile />
      <main className="mx-5 pt-7 flex flex-col gap-5">
        <div className="font-heading flex flex-col text-[30px]/[30px]">
          <span>Ve svém mandátu se zaměřuji</span>
          <span>především na naši bezpečnost</span>
          <span>a naše digitální svobody.</span>
        </div>
        <div className="text-[14px]">
          Od roku 2019 se věnuji regionu <br />
          Východního partnerství, včetně Ukrajiny,<br />
          hájím lidská práva ve světě a zaměřuji <br />
          se na stále ještě opomíjený vliv nových<br />
          technologií na naši bezpečnost a demokracii:<br />
          ať již v podobě zbraní dvojího užití,<br />
          dezinformací, cizího vměšování<br />
          či umělé inteligence. Zároveň se snažím <br />
          uhájit decentralizovaný, anonymní<br />
          a svobodný Internet, kde není prolamováno<br />
          soukromí běžných občanů.<br />
        </div>
        <Image
          src="/marketa-icon-large.png"
          height={309}
          width={309}
          alt="Markéta large icon"
          className="mx-auto mt-5"
          unoptimized
        />
      </main>
    </div>
  );
};

export default MojePrace;
