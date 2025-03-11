import Image from "next/image";
import HeaderMobile from "../components/HeaderMobile";
import LabelDark from "../components/LabelDark";

const MojePrace = () => {
  return (
    <div className="bg-light-pink text-dark-pink">
      <HeaderMobile />
      <main className="flex flex-col">

        <div className="h-screen max-h-screen flex flex-col pt-7 gap-5 px-5">
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
        </div>
        <div className="flex flex-col bg-beige py-16 gap-6">
          <div className="font-heading text-[30px]/[34px] text-center">
            V Evropském parlamentu proto ve<br />
            volebním období 2025-2029<br />
            působím v následujících výborech:<br />
          </div>
          <div className="text-white flex flex-col items-center gap-3 mx-4">
            <LabelDark content="INTA — Mezinárodní obchod" />
            <LabelDark content="ITRE — Průmysl, energetika a obchod" />
            <LabelDark content=" AFCO — Ústavní záležitosti" />
            <LabelDark content=" LIBE — Občanské svobody a spravedlnost" />
          </div>
        </div>

        <div className="flex flex-col bg-light-pink py-16 gap-7">

          <div className="font-heading text-[30px]/[34px] text-center">
            Zároveň jsem<br /> místopředsedkyní
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-auto text-[15px] sm:text-[24px] italic border border-white rounded-full px-5 py-1">
              Delegace pro vztahy EU s Čínou
            </div>
            <div className="w-auto text-[15px] sm:text-[24px] italic border border-white rounded-full px-5 py-1">
              Delegace pro vztahy se zeměmi Euronest
            </div>
          </div>

          <div className="text-[14px] mx-5 text-center">
            a členkou delegací pro vztahy s Ruskem,<br />
            Běloruskem, Arménií, Azerbajdžánem a Gruzií. <br />
            Výstupy na plénu, odpracovanou legislativu<br />
            i interpelace na Komisi či Radu si můžete<br />
            prohlédnout na mém p<span className="underline decoration-dark-pink">rofilu</span>.<br />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MojePrace;
