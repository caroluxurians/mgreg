import Image from "next/image";
import HeaderMobile from "../components/HeaderMobile";
import LabelDark from "../components/LabelDark";
import LabelTransparent from "../components/LabelTransparent";
import Header from "../components/Header";

const MojePrace = () => {
  return (
    <div className="bg-light-pink text-dark-pink">
      <HeaderMobile />
      <Header
        display="hidden md:flex"
      />
      <main className="flex flex-col">

        <div className="sm:flex sm:justify-center">
          <div
            className="h-screen max-h-screen flex flex-col pt-7 gap-5 px-5
            sm:h-auto sm:grid sm:grid-cols-[3fr_2fr] sm:px-10 sm:gap-0 sm:pb-10 sm:w-[640px]
            md:w-[730px] md:pt-10"
          >
            <div className="flex flex-col gap-5">
              <div className="font-heading flex flex-col text-[30px]/[30px] sm:text-[35px]/[37px] md:text-[40px]/[47px]">
                <span>Ve svém mandátu se zaměřuji</span>
                <span>především na naši bezpečnost</span>
                <span>a naše digitální svobody.</span>
              </div>

              <div className="text-[14px] sm:text-[16px] block md:hidden">
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
              <div className="text-[14px] sm:text-[16px] hidden md:block">
                Od roku 2019 se věnuji regionu Východního <br />
                partnerství, včetně Ukrajiny, hájím lidská práva<br />
                ve světě a zaměřuji se na stále ještě opomíjený vliv <br />
                nových technologií na naši bezpečnost a demokracii: <br />
                ať již v podobě zbraní dvojího užití, dezinformací,<br />
                cizího vměšování či umělé inteligence. Zároveň<br />
                se snažím uhájit decentralizovaný, anonymní<br />
                a svobodný Internet, kde není prolamováno<br />
                soukromí běžných občanů.<br />

              </div>
            </div>

            <Image
              src="/marketa-icon-large.png"
              height={309}
              width={309}
              alt="Markéta large icon"
              className="block mx-auto sm:hidden md:block md:ml-2 md:mt-1"
              unoptimized
            />
            <Image
              src="/marketa-icon-large.png"
              height={220}
              width={220}
              alt="Markéta large icon"
              className="hidden sm:block md:hidden mt-4 sm:mr-4"
              unoptimized
            />
          </div>
        </div>

        <div className="flex flex-col bg-beige py-16 gap-6 sm:py-10">
          <div className="font-heading text-[30px]/[34px] sm:text-[35px]/[39px] md:text-[40px]/[47px] text-center">
            V Evropském parlamentu proto ve<br />
            volebním období 2025-2029<br />
            působím v následujících výborech:<br />
          </div>
          <div className="text-white flex flex-col items-center gap-3 mx-4 sm:gap-4">
            <LabelDark content="INTA — Mezinárodní obchod" />
            <LabelDark content="ITRE — Průmysl, energetika a obchod" />
            <LabelDark content=" AFCO — Ústavní záležitosti" />
            <LabelDark content=" LIBE — Občanské svobody a spravedlnost" />
          </div>
        </div>

        <div className="flex flex-col bg-light-pink gap-7 py-16 sm:pt-10 sm:pb-12 sm:gap-6">

          <div className="font-heading text-center text-[30px]/[34px] sm:text-[35px]/[39px] md:text-[40px]/[47px]">
            Zároveň jsem<br /> místopředsedkyní
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <LabelTransparent content="Delegace pro vztahy EU s Čínou" />
            <LabelTransparent content="Delegace pro vztahy se zeměmi Euronest" />
          </div>

          <div className="text-[14px] mx-5 text-center sm:text-[16px]/[26px]">
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
