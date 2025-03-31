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
          <div className="w-[350px] mx-auto mt-5 mb-8">
            <div className="font-heading text-red-pink-light text-[30px]/[36px] mb-3">
              Jsem Markéta Gregorová.< br />Členkou České pirátské strany< br /> jsem od roku 2012,
            </div>
            <div className="w-60 flex ml-25 mb-6">
              <Image
                src="/o-mne-marketa.png"
                height={681}
                width={681}
                unoptimized
                alt="image of Marketa standing by the lectern"
              />
            </div>

            <div className="text-white flex flex-col gap-4 text-[14px]/[24px]">
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
        </div>

        <div className="bg-beige text-medium-pink pt-6 pb-6">

          <div className="grid grid-cols-[2fr_3fr] w-[350px]">

            <div className="pt-10 pb-12 grid grid-cols-2 relative">
              <div className="flex flex-col h-240 sm:justify-between pb-12 absolute top-8 left-6">
                <TimelineBulletPoint shape="ellipse" />
                <TimelineBulletPoint shape="circle" styles="mt-15" />
                <TimelineBulletPoint shape="ellipse" styles="mt-61" />
                <TimelineBulletPoint shape="circle" styles="mt-15" />
              </div>
              <div className="w-1 h-240 bg-red-pink absolute left-28 relative">
                <div className="w-6 absolute -top-5 -left-2.5">
                  <Image
                    src="/cat-timeline-icon.svg"
                    height={54}
                    width={52}
                    alt="start of the timeline icon shaped like a cat"
                  />
                </div>
                <div className="w-6 absolute -bottom-5 -left-2.5">
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
              <div className="flex flex-col h-240 justify-around pt-8">
                <TimelineEvent eventName="Vstup do České pirátské strany" eventDescription="Markéta Gregorová se stala členkou České pirátské strany v roce 2012." />
                <TimelineEvent eventName="Lorem ipsum stup do České pirátské strany" eventDescription="Markéta Gregorová se stala členkou České pirátské strany v roce 2012.Markéta Gregorová se stala členkou České pirátské strany v roce 2012.Markéta Gregorová se stala členkou České pirátské strany v roce 2012.Markéta Gregorová se stala členkou České pirátské strany v roce 2012." />
                <TimelineEvent eventName="Vstup do České pirátské strany" eventDescription="Markéta Gregorová se stala členkou České pirátské strany v roce 2012." />
                <TimelineEvent eventName="Lorem ipsum stup do České pirátské strany" eventDescription="Markéta Gregorová se stala členkou České pirátské strany v roce 2012.Markéta Gregorová se stala členkou České pirátské strany v roce 2012.Markéta Gregorová se stala členkou České pirátské strany v roce 2012.Markéta Gregorová se stala členkou České pirátské strany v roce 2012." />
              </div>

            </div>
          </div>
        </div>

        <div className="bg-red-pink pt-14 pb-10 relative overflow-hidden">
          <div className="w-20 absolute top-0 left-0">
            <Image
              src="/cat-curious.svg"
              height={258}
              width={270}
              alt="curious cat"
              unoptimized
              className="transform rotate-180 absolute -top-4 left-10 overflow-hidden"
            />
          </div>
          <div className="w-[350px] text-light-pink mx-auto flex flex-col items-center gap-4">
            <div className="font-heading text-red-pink-light text-[30px]/[30px]">
              Finance
            </div>
            <div className="text-center text-[14px]/[24px]">
              Naše delegace Pirátů v Evropském parlamentu byla, je a bude ohledně svých výdajů vždy absolutně transparentní. K čemu je rozpočet na všeobecné výdaje, jak ho využíváe a jaké je aktuální čerpání? Vše naleznete přehledně na
            </div>
            <LabelDark content="stránkách Pirátů" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default OMne;
