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
            className="h-screen max-h-screen flex flex-col pt-7 gap-5
            w-[350px] mx-auto
            sm:h-auto sm:grid sm:grid-cols-[3fr_2fr] sm:gap-0 sm:pb-10 sm:w-[560px]
            md:w-[700px] md:pt-10
            lg:w-[900px] lg:pt-0 lg:pb-0 lg:mt-14 lg:mb-18
            xl:w-[1100px] xl:grid-cols-[5fr_3fr]
            2xl:w-[1400px]"
          >
            <div className="flex flex-col gap-5">
              <div className="font-heading flex flex-col text-[30px]/[30px] sm:text-[35px]/[37px] md:text-[40px]/[47px] lg:text-[50px]/[55px] xl:text-[70px]/[72px]">
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
              <div className="text-[14px] sm:text-[16px] hidden md:block lg:hidden">
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
              <div className="hidden lg:block lg:text-[18px]">
                Od roku 2019 se věnuji regionu Východního partnerství,<br />
                včetně Ukrajiny, hájím lidská práva ve světě a zaměřuji se<br />
                na stále ještě opomíjený vliv nových technologií na naši<br />
                bezpečnost a demokracii: ať již v podobě zbraní dvojího užití,<br />
                dezinformací, cizího vměšování či umělé inteligence. Zároveň<br />
                se snažím uhájit decentralizovaný, anonymní a svobodný<br />
                Internet, kde není prolamováno soukromí běžných občanů.<br />
              </div>
            </div>

            <Image
              src="/marketa-icon-large.png"
              height={309}
              width={309}
              alt="Markéta large icon"
              className="block mx-auto sm:hidden md:block md:ml-2 md:mt-1 md:w-[270px] md:h-[270px] lg:w-[360px] lg:h-[360px] lg:ml-0 lg:mt-2 xl:h-[410px] xl:w-[410px]"
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

        <div className="flex flex-col bg-beige py-16 gap-6 sm:py-10 md:pt-15 md:pb-20 xl:gap-8 xl:pb-27">
          <div className="font-heading text-center text-[30px]/[34px] sm:text-[35px]/[39px] md:text-[40px]/[47px] lg:text-[50px]/[55px] xl:text-[70px]/[72px]">
            V Evropském parlamentu proto ve<br />
            volebním období 2025-2029<br />
            působím v následujících výborech:<br />
          </div>
          <div className="text-white lg:mx-auto mx-4 sm:gap-4 md:mx-auto lg:gap-0">
            <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-center md:w-[700px] lg:w-[770px] gap-3 xl:gap-5">
              <LabelDark content="INTA — Mezinárodní obchod" />
              <LabelDark content="ITRE — Průmysl, energetika a obchod" />
              <LabelDark content=" AFCO — Ústavní záležitosti" />
              <LabelDark content=" LIBE — Občanské svobody a spravedlnost" />
            </div>

          </div>
        </div>

        <div className="flex flex-col bg-light-pink gap-7 py-16 sm:pt-10 sm:pb-12 sm:gap-6 lg:gap-7 lg:pt-14 lg:pb-22 xl:gap-8 xl:pt-16 xl:pb-26">

          <div className="font-heading text-center text-[30px]/[34px] sm:text-[35px]/[39px] md:text-[40px]/[47px] lg:text-[50px]/[55px] xl:text-[70px]/[72px]">
            Zároveň jsem<br /> místopředsedkyní
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4 lg:flex-row mx-auto xl:gap-5">
            <LabelTransparent content="Delegace pro vztahy EU s Čínou" />
            <LabelTransparent content="Delegace pro vztahy se zeměmi Euronest" />
          </div>

          <div className="text-[14px] mx-5 text-center sm:text-[16px]/[26px] md:hidden">
            a členkou delegací pro vztahy s Ruskem,<br />
            Běloruskem, Arménií, Azerbajdžánem a Gruzií. <br />
            Výstupy na plénu, odpracovanou legislativu<br />
            i interpelace na Komisi či Radu si můžete<br />
            prohlédnout na mém p<span className="underline decoration-dark-pink">rofilu</span>.<br />
          </div>
          <div className="hidden md:block text-center md:text-[16px]/[26px] lg:text-[18px]">
            a členkou delegací pro vztahy s Ruskem, Běloruskem, Arménií,<br />
            Azerbajdžánem a Gruzií. Výstupy na plénu, odpracovanou<br />
            legislativu i interpelace na Komisi či Radu si můžete<br />
            prohlédnout na mém p<span className="underline decoration-dark-pink">rofilu</span>.<br />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MojePrace;
