import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import Image from "next/image";
import LabelDark from "@/app/components/LabelDark";
import Link from "next/link";
import TimelineBulletPoint from "./TimelineBulletPoint";
import TimelineEvent from "./TimelineEvent";
import TimelineEventLarge from "./TimelineEventLarge";

const OMne = () => {
  return (
    <div className="bg-medium-pink">
      <HeaderMobile textColor="text-beige" borderColor="border-beige" />
      <Header />
      <main>
        <div>
          <div className="main-width mx-auto mt-5 mb-8 flex flex-col sm:grid sm:grid-cols-[3fr_2fr]
            sm:mt-7 sm:mb-10
            md:mt-10 md:mb-12
            lg:mt-14 lg:mb-18
            xl:mt-16 xl:mb-20
            2xl:mt-20 2xl:mb-24"
          >
            <div>
              <div className="font-heading title-font-size text-red-pink-light mb-3 lg:mb-4 2xl:mb-3">
                Jsem Markéta Gregorová. Členkou České pirátské strany jsem od roku 2012,
              </div>
              <div className="w-60 flex ml-25 mb-6 sm:hidden">
                <Image
                  src="/marketa-o-mne.png"
                  height={681}
                  width={681}
                  unoptimized
                  alt="image of Marketa standing by the lectern"
                />
              </div>
              <div className="text-white paragraph-font-size flex flex-col w-76 gap-4 sm:w-70 md:w-88 lg:w-110 xl:w-120 2xl:w-156 2xl:gap-6">
                <div>
                  v letech 2018 až 2020 jsem působila jako
                  předsedkyně <Link href="https://european-pirateparty.eu" target="_blank" className="underline">Evropské pirátské strany</Link>. Od roku
                  2019 pracuji jako poslankyně Evropského
                  parlamentu. V&nbsp;roce 2024 jsem svůj mandát
                  obhájila.
                </div>
                <div>
                  Vystudovala jsem bakalářské studium
                  Mezinárodních vztahů a&nbsp;Evropských studií a&nbsp;magisterské
                  studium Veřejné správy a&nbsp;Bezpečnostních studií. Pracovala jsem jako
                  testerka webových aplikací či markeťačka ve
                  středních i&nbsp;menších firmách, stejně jako v&nbsp;neziskovém
                  sektoru a&nbsp;na vlastní triko.
                </div>
                <div>
                  Zpívám v kapele Definitivní ententýk, miluji
                  svou kočku Kočku a&nbsp;největší radost mi dělá,
                  když lidé volí informovaně.
                </div>
              </div>
            </div>
            <div className="hidden w-63 flex pt-10 sm:block md:w-66 md:mr-4 lg:w-94 lg:mr-2 xl:w-110 xl:mr-0 2xl:w-136">
              <Image
                src="/marketa-o-mne.png"
                height={681}
                width={681}
                unoptimized
                alt="image of Marketa standing by the lectern"
              />
            </div>
          </div>
        </div>

        <div
          className="bg-beige text-medium-pink pt-6 pb-6
          sm:pt-10 sm:pb-10 lg:pb-16 xl:pt-20 xl:pb-18
          2xl:pt-24 2xl:pb-28"
        >
          <div
            className="main-width grid grid-cols-[2fr_3fr]
            sm:mx-auto sm:grid-cols-[1fr_3fr] sm:gap-3
            md:gap-0
            2xl:px-20"
          >
            <div className="pt-10 pb-12 grid grid-cols-2 relative">
              <div
                className="flex flex-col h-520 pb-12 absolute top-8 left-6
                justify-between
                sm:h-576 sm:top-12 sm:left-6 sm:pb-40
                md:h-480 md:left-2
                lg:h-530 lg:left-0
                xl:h-584 xl:-left-2
                2xl:h-610 2xl:top-16"
              >
                <TimelineBulletPoint shape="ellipse" year="2019" />
                <TimelineBulletPoint shape="circle" year="2021" />
                <TimelineBulletPoint shape="ellipse" year="2021" />
                <TimelineBulletPoint shape="circle" year="2022" />
                <TimelineBulletPoint shape="ellipse" year="2023" />
                <TimelineBulletPoint shape="circle" year="2024" />
                <TimelineBulletPoint shape="ellipse" year="2024" />
                <TimelineBulletPoint shape="circle" year="2024" />
                <TimelineBulletPoint shape="ellipse" year="2025" styles="pt-16 sm:pt-18 md:pt-0" />
              </div>
              <div
                className="w-1 h-570 bg-red-pink absolute left-28 relative
                  sm:left-32 sm:h-610
                  md:h-470
                  lg:h-526 lg:left-38
                  xl:h-580 xl:left-42
                  2xl:h-618 2xl:left-50"
              >
                <div className="w-6 absolute -top-5 -left-2.5 sm:w-8 sm:-left-3.5 lg:w-10 lg:-top-10 lg:-left-4.5 2xl:w-12 2xl:-left-5.5 2xl:-top-12">
                  <Image
                    src="/cat-timeline-icon.svg"
                    height={54}
                    width={52}
                    alt="start of the timeline icon shaped like a cat"
                  />
                </div>
                <div className="w-6 absolute -bottom-5 -left-2.5 sm:w-8 sm:-left-3.5 lg:w-10 lg:-bottom-8 lg:-left-4.5 2xl:w-12 2xl:-left-5.5 2xl:-bottom-10">
                  <Image
                    src="/cat-timeline-icon.svg"
                    height={54}
                    width={52}
                    alt="end of the timeline icon shaped like a cat"
                  />
                </div>
              </div>
            </div>

            <div
              className="flex flex-col h-550 justify-between mt-12
              sm:h-590 sm:mt-14 md:h-450 md:mt-16 md:-ml-4
              lg:h-510 lg:-ml-12 lg:mt-14
              xl:h-560 xl:-ml-18
              2xl:h-590
              3xl:-ml-32"
            >
              <TimelineEvent
                eventName="Zvolení do Evropského parlamentu"
                imageSrc="/tl/zvoleni.jpeg"
                alt="fotka zvolení Markéty do Evropského parlamentu"
                styles=""
                rotate="md:-rotate-4"
              />
              <TimelineEvent
                eventName="Iniciovala jsem historicky první misi europarlamentu na Taiwan"
                imageSrc="/tl/taiwan.jpg"
                alt="fotka historicky první mise europarlamentu na Taiwan"
                styles=""
                rotate="md:rotate-4"
              />
              <TimelineEventLarge
                eventName="Celý mandát jsem produkovala kampaně o dezinformacích, kyberbezpečnosti, AI a inkluzivitě v politice"
                imageSrc="/tl/4.png"
                alt="fotka loga kampaně o dezinformacích, kyberbezpečnosti, AI a inkluzivitě v politice"
                styles=""
              />

              <TimelineEvent
                eventName="Výstava zakázaného čínského umělce a aktivisty Badiucaa"
                imageSrc="/tl/cinsky-umelec.jpeg"
                alt="fotka z výstavy zakázaného čínského umělce a aktivisty Badiucaa"
                styles=""
                rotate="md:rotate-4"
              />
              <TimelineEvent
                eventName="Výstava dokumentující ruské válečné zločiny na Ukrajině"
                imageSrc="/tl/vystava-ukrajina.JPG"
                alt="fotka z výstavy dokumentující ruské válečné zločiny na Ukrajině"
                styles=""
                rotate="md:-rotate-4"
              />
              <TimelineEvent
                eventName="Křest Sborníku o eurofederalismu, Vize pro Evropu"
                imageSrc="/tl/sbornik.JPG"
                alt="fotka ze křtu Sborníku o eurofederalismu, Vize pro Evropu"
                styles=""
                rotate="md:rotate-4"
              />
              <TimelineEvent
                eventName="Znovuzvolení do Evropského parlamentu"
                imageSrc="/tl/znovuzvoleni.JPEG"
                alt="fotka znovuzvolení Markéty do Evropského parlamentu"
                styles=""
                rotate="md:-rotate-4"
              />
              <TimelineEvent
                eventName="Můj nominant na Sacharovovu cenu Dr. Gubad Ibadoghlu se dostal do finále"
                imageSrc="/tl/sacharova-cena.jpg"
                alt="fotka Markéty a Bayram/Zhala Bayramova (lidskoprávní právník a dítě Dr. Gubad Ibadoghlua)"
                styles=""
                rotate="md:rotate-4"
              />
              <TimelineEvent
                eventName="Stovky dopisů politickým vězňům z&nbsp;řad Ukrajinců, Krymčanů a&nbsp;Krymských Tatarů"
                imageSrc="/tl/dopisy.jpg"
                alt="fotka ze psaní Stovky dopisů politickým vězňům z řad Ukrajinců, Krymčanů a Krymských Tatarů"
                styles=""
                rotate="md:-rotate-4"
              />
            </div>

            { /*  <div className="hidden md:hidden
            flex-col justify-around md:mb-20 lg:mb-40 2xl:mb-26 3xl:h-360 3xl:mb-0 3xl:mt-5">
              <div className="md:w-52 lg:w-78 xl:w-88 2xl:w-108 3xl:w-115">
                <Image src="/timeline-placeholder-image-odd.png"
                height={277.36} width={458.16} alt="timeline image" />
              </div>
              <div className="md:w-52 lg:w-78 xl:w-88 2xl:w-108 3xl:w-115">
                <Image src="/timeline-placeholder-image-even.png"
                 height={277.36} width={458.16} alt="timeline image" />
              </div>
              <div className="md:w-52 lg:w-78 xl:w-88 2xl:w-108 3xl:w-115">
                <Image src="/timeline-placeholder-image-odd.png"
                 height={277.36} width={458.16} alt="timeline image" />
              </div>
              <div className="md:w-52 lg:w-78 xl:w-88 2xl:w-108 3xl:w-115">
                <Image src="/timeline-placeholder-image-even.png"
                height={277.36} width={458.16} alt="timeline image" />
              </div>
            </div> */}
          </div>
        </div>

        <div className="bg-red-pink pt-22 pb-66 relative overflow-hidden sm:pt-26 sm:pb-76 md:pb-84 lg:pb-26 xl:pb-30 2xl:pt-34 2xl:pb-36 3xl:pt-36 3xl:pb-38">
          <div className="w-20 absolute top-0 left-0 sm:w-36 md:w-40 lg:w-36 lg:left-14 xl:w-48 xl:left-12 2xl:w-52 2xl:left-22 3xl:w-53 3xl:left-50">
            <Image
              src="/cat-curious-upsidedown.svg"
              height={223.04}
              width={213.5}
              alt="curious cat"
              className="absolute -top-3 left-10 overflow-hidden sm:-top-5"
            />
          </div>
          <div className="main-width text-light-pink mx-auto flex flex-col items-center gap-4 relative sm:gap-6 2xl:gap-10">
            <div className="font-heading text-red-pink-light text-[30px] sm:text-[40px] md:text-[46px] lg:text-[50px]/[46px] xl:text-[70px]/[72px] 2xl:text-[88px]/[88px] 3xl:text-[100px]">
              Finance
            </div>
            <div className="text-center paragraph-font-size 2xl:mb-2">
              Naše delegace Pirátů v Evropském parlamentu byla,<br />
              je a bude ohledně svých výdajů vždy absolutně<br />
              transparentní. K čemu je rozpočet na všeobecné<br />
              výdaje, jak ho využíváme a jaké je aktuální čerpání?<br />
              Vše naleznete přehledně na
            </div>
            <LabelDark
              content="stránkách Pirátů"
              link="https://europarlament.pirati.cz/hospodareni-v-evropskem-parlamentu/"
            />
          </div>
          <div className="w-40 absolute right-7 bottom-6 sm:w-52 sm:bottom-7 sm:right-11 md:w-58 md:bottom-8 md:right-14 lg:w-52 lg:top-20 lg:right-10 xl:w-70 xl:right-14 2xl:w-110 2xl:right-0 3xl:w-115 3xl:right-10 3xl:top-24">
            <Image
              src="/cat-transparency.svg"
              height={463}
              width={361}
              alt="happy cat with transparency label"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default OMne;
