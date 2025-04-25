import Image from "next/image";
import Link from "next/link";
import LabelDark from "../../components/LabelDark";
import LabelTransparent from "../../components/LabelTransparent";
import Header from "../../components/Header";
import HeaderMobile from "../../components/HeaderMobile";

const MojePrace = () => {
  return (
    <div className="bg-light-pink">
      <HeaderMobile />
      <Header />
      <main className="flex flex-col">

        <div className="sm:flex sm:justify-center">
          <div
            className="h-screen main-width max-h-screen flex flex-col mt-7 gap-5 mx-auto -mb-20
            sm:h-auto sm:grid sm:grid-cols-[3fr_2fr] sm:gap-0 sm:mb-10
            md:mt-10
            lg:mt-14 lg:mb-18
            xl:grid-cols-[5fr_3fr]
            2xl:grid-cols-[5fr_4fr] 2xl:mt-18 2xl:mb-20
            3xl:mb-28"
          >
            <div className="flex flex-col gap-5 2xl:gap-7 3xl:gap-10">
              <div className="font-heading title-font-size text-medium-pink flex flex-col">
                <span>Ve svém mandátu se zaměřuji</span>
                <span>především na naši bezpečnost</span>
                <span>a naše digitální svobody.</span>
              </div>
              <div className="text-dark-pink paragraph-font-size w-68 sm:w-76 md:w-88 lg:w-110 xl:w-130 2xl:w-156 3xl:w-170">
                Od roku 2019 se věnuji region
                Východního partnerství, včetně Ukrajiny,
                hájím lidská práva ve světě a zaměřuji
                se na stále ještě opomíjený vliv nových
                technologií na naši bezpečnost a demokracii:
                ať již v podobě zbraní dvojího užití,
                dezinformací, cizího vměšování
                či umělé inteligence. Zároveň se snažím
                uhájit decentralizovaný, anonymní
                a svobodný Internet, kde není prolamováno
                soukromí běžných občanů.
              </div>
            </div>
            <div className="mx-auto w-78 mt-4 sm:w-58 md:w-70 md:mr-2 md:mt-2 lg:w-94 lg:ml-0 lg:mt-2 xl:w-110 2xl:w-136 2xl:ml-22 3xl:w-160">
              <Image
                src="/marketa-icon-large.png"
                height={642}
                width={642}
                alt="Markéta large icon"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-beige py-16 gap-6 sm:py-10 md:pt-15 md:pb-20 xl:gap-8 xl:pb-27 2xl:gap-10 2xl:pt-17 2xl:pb-30 3xl:pt-24 3xl:pb-44 3xl:gap-12">
          <div className="font-heading title-font-size text-medium-pink text-center">
            V Evropském parlamentu proto ve<br />
            volebním období 2025-2029<br />
            působím v následujících výborech:<br />
          </div>
          <div className="text-white lg:mx-auto mx-4 sm:gap-4 md:mx-auto lg:gap-0">
            <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-center md:w-[700px] lg:w-[770px] gap-3 xl:gap-5 2xl:gap-6 xl:w-[900px]">
              <LabelDark
                content="INTA — Mezinárodní obchod"
                link="https://www.europarl.europa.eu/committees/cs/inta/home/highlights"
              />
              <LabelDark
                content="ITRE — Průmysl, energetika a obchod"
                link="https://www.europarl.europa.eu/committees/cs/itre/home/highlights"
              />
              <LabelDark
                content="AFCO — Ústavní záležitosti"
                link="https://www.europarl.europa.eu/committees/cs/afco/home/highlights"
              />
              <LabelDark
                content="LIBE — Občanské svobody a spravedlnost"
                link="https://www.europarl.europa.eu/committees/cs/libe/home/highlights"
              />
            </div>

          </div>
        </div>

        <div className="flex flex-col bg-light-pink gap-7 py-16 sm:pt-10 sm:pb-12 sm:gap-6 lg:gap-7 lg:pt-14 lg:pb-22 xl:gap-8 xl:pt-16 xl:pb-26 2xl:pt-20 2xl:pb-30 2xl:gap-9 3xl:pt-31 3xl:pb-40">

          <div className="font-heading title-font-size text-medium-pink text-center">
            Zároveň jsem<br /> místopředsedkyní
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4 lg:flex-row mx-auto xl:gap-5 2xl:gap-7 3xl:gap-10">
            <LabelTransparent content="Delegace pro vztahy EU s Čínou" />
            <LabelTransparent content="Delegace pro vztahy se zeměmi Euronest" />
          </div>

          <div className="text-medium-pink paragraph-font-size mx-5 text-center md:hidden">
            a členkou delegací pro vztahy s Ruskem,<br />
            Běloruskem, Arménií, Azerbajdžánem a Gruzií. <br />
            Výstupy na plénu, odpracovanou legislativu<br />
            i interpelace na Komisi či Radu si můžete<br />
            prohlédnout na mém p<span className="underline decoration-medium-pink">rofilu</span>.<br />
          </div>
          <div className="text-medium-pink paragraph-font-size hidden md:block text-center">
            a členkou delegací pro vztahy s Ruskem, Běloruskem, Arménií,<br />
            Azerbajdžánem a Gruzií. Výstupy na plénu, odpracovanou<br />
            legislativu i interpelace na Komisi či Radu si můžete<br />
            prohlédnout na mém p
            <Link
              href="https://www.europarl.europa.eu/meps/cs/197549/MARKETA_GREGOROVA/home"
              target="_blank"
            >
              <span className="underline decoration-medium-pink">rofilu</span>
            </Link>

            .<br />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MojePrace;
