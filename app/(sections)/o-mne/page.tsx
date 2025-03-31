import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import Image from "next/image";
import TimelineBulletPoint from "./TimelineBulletPoint";
import TimelineEvent from "./TimelineEvent";
import LabelDark from "@/app/components/LabelDark";

const OMne = () => {
  return (
    <div className="bg-medium-pink">
      <HeaderMobile textColor="text-beige" borderColor="border-beige" />
      <Header />
      <main>
        <div>
          <div className="w-[350px] sm:w-[560px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1400px] 3xl:w-[1660px] mx-auto mt-5 mb-8 flex flex-col sm:grid sm:grid-cols-[3fr_2fr]">
            <div>

              <div className="font-heading text-red-pink-light text-[30px]/[36px] mb-3 sm:text-[35px]/[41px] ">
                Jsem Markéta Gregorová.< br />Členkou České pirátské strany< br /> jsem od roku 2012,
              </div>
              <div className="w-60 flex ml-25 mb-6 sm:hidden">
                <Image
                  src="/o-mne-marketa.png"
                  height={681}
                  width={681}
                  unoptimized
                  alt="image of Marketa standing by the lectern"
                />
              </div>

              <div className="text-white flex flex-col gap-4 text-[14px]/[24px] sm:w-70 sm:text-[16px]/[26px]">
                <div>
                  v letech 2018 až 2020 jsem působila jako předsedkyně Evropské pirátské strany. Od roku 2019 pracuji jako poslankyně Evropského parlamentu. V roce 2024 jsem svůj mandát obhájila.
                </div>
                <div>
                  Vystudovala jsem bakalářské studium Mezinárodních vztahů a Evropských studií a magisterské studium Veřejné správy a Bezpečnostních studií. Pracovala jsem jako testerka webových aplikací či markeťačka ve středních i menších firmách, stejně jako v neziskovém sektoru a na vlastní triko.
                </div>
                <div>
                  Zpívám v kapele Definitivní ententýk, miluji svou kočku Kočku a největší radost mi dělá, když lidé volí informovaně.
                </div>
              </div>
            </div>

            <div className="hidden w-64 flex sm:block pt-10">
              <Image
                src="/o-mne-marketa.png"
                height={681}
                width={681}
                unoptimized
                alt="image of Marketa standing by the lectern"
              />
            </div>
          </div>
        </div>

        <div className="bg-beige text-medium-pink pt-6 pb-6">

          <div className="grid grid-cols-[2fr_3fr] w-[350px] sm:w-[560px] sm:mx-auto sm:grid-cols-[1fr_3fr] sm:gap-3">

            <div className="pt-10 pb-12 grid grid-cols-2 relative">
              <div className="flex flex-col h-240 sm:justify-between pb-12 absolute top-8 left-6 sm:top-12 sm:left-6 sm:pb-40">
                <TimelineBulletPoint shape="ellipse" />
                <TimelineBulletPoint shape="circle" styles="mt-15 sm:mt-0" />
                <TimelineBulletPoint shape="ellipse" styles="mt-61 sm:mt-0" />
                <TimelineBulletPoint shape="circle" styles="mt-15 sm:mt-0" />
              </div>
              <div className="w-1 h-240 bg-red-pink absolute left-28 relative sm:left-32 sm:h-260">
                <div className="w-6 absolute -top-5 -left-2.5 sm:w-8 sm:-left-3.5">
                  <Image
                    src="/cat-timeline-icon.svg"
                    height={54}
                    width={52}
                    alt="start of the timeline icon shaped like a cat"
                  />
                </div>
                <div className="w-6 absolute -bottom-5 -left-2.5 sm:w-8 sm:-left-3.5">
                  <Image
                    src="/cat-timeline-icon.svg"
                    height={54}
                    width={52}
                    alt="end of the timeline icon shaped like a cat"
                    className="transform rotate-180"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col h-260 justify-around pt-8 sm:pt-12">
                <TimelineEvent
                  eventName="Vstup do České pirátské strany"
                  eventDescription="Markéta Gregorová se stala členkou České pirátské strany v roce 2012."
                  styles="mb-31"
                />
                <TimelineEvent
                  eventName="Lorem ipsum stup do České pirátské strany"
                  eventDescription="Markéta Gregorová se stala členkou České pirátské strany v roce 2012.Markéta Gregorová se stala členkou České pirátské strany v roce 2012.Markéta Gregorová se stala členkou České pirátské strany v roce 2012.Markéta Gregorová se stala členkou České pirátské strany v roce 2012."

                />
                <TimelineEvent
                  eventName="Vstup do České pirátské strany"
                  eventDescription="Markéta Gregorová se stala členkou České pirátské strany v roce 2012."
                  styles="sm:mb-32"
                />
                <TimelineEvent
                  eventName="Lorem ipsum stup do České pirátské strany"
                  eventDescription="Markéta Gregorová se stala členkou České pirátské strany v roce 2012.Markéta Gregorová se stala členkou České pirátské strany v roce 2012.Markéta Gregorová se stala členkou České pirátské strany v roce 2012.Markéta Gregorová se stala členkou České pirátské strany v roce 2012."
                  styles="sm:mb-8"
                />
              </div>

            </div>
          </div>
        </div>

        <div className="bg-red-pink pt-22 pb-66 relative overflow-hidden sm:pt-26 sm:pb-76">
          <div className="w-20 absolute top-0 left-0 sm:w-36">
            <Image
              src="/cat-curious-upsidedown.svg"
              height={223.04}
              width={213.5}
              alt="curious cat"
              className="absolute -top-3 left-10 overflow-hidden sm:-top-5"
            />
          </div>
          <div className="w-[350px] text-light-pink mx-auto flex flex-col items-center gap-4 relative sm:w-[560px] sm:gap-6">
            <div className="font-heading text-red-pink-light text-[30px]/[30px] sm:text-[40px]">
              Finance
            </div>
            <div className="text-center text-[14px]/[24px] sm:text-[16px]/[26px] sm:w-auto">
              Naše delegace Pirátů v Evropském parlamentu byla,<br />
              je a bude ohledně svých výdajů vždy absolutně< br /> transparentní. K čemu je rozpočet na všeobecné< br />
              výdaje, jak ho využíváe a jaké je aktuální čerpání?< br />
              Vše naleznete přehledně na
            </div>
            <LabelDark content="stránkách Pirátů" />
          </div>
          <div className="w-40 absolute right-7 bottom-6 sm:w-52 sm:bottom-7 sm:right-11">
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
