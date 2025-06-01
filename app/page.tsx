import Image from "next/image";
import HeaderMobileLanding from "./components/HeaderMobileLanding";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="bg-dark-pink">
      <div className="flex flex-col lg:min-h-screen bg-light-pink">
        <Header />
        <HeaderMobileLanding />
        <main className="lg:flex-1 relative bg-light-pink flex main-width mx-auto">
          <div className="flex grow justify-center items-end">
            <div
              className="absolute bg-light-pink z-0 rounded-full
              bottom-[60px] mr-[15px] size-100
              sm:bottom-[225px] sm:mr-[15px] sm:size-120
              md:bottom-[270px] md:mr-[15px] md:size-130
              lg:bottom-[420px] lg:mr-[20px] lg:size-90
              xl:bottom-[220px] xl:mr-[25px] xl:size-90
              2xl:bottom-[255px] 2xl:mr-[30px] 2xl:size-170
              shadow-[0_0_40px_rgba(119,14,61,0.4)]
              lg:shadow-[0_0_40px_rgba(119,14,61,0.8)]"
            />
            <Image
              src="/marketa-landing-cropped.png"
              height={800}
              width={640}
              alt="Markéta Gregorová foto sm"
              unoptimized
              className="xl:hidden z-1"
            />
            <Image
              src="/marketa-landing-cropped-3.png"
              height={1200}
              width={900}
              alt="Markéta Gregorová foto sm"
              unoptimized
              className="hidden xl:block xl:w-140 2xl:w-[900px] z-1"
            />
          </div>
          <h1 className="hidden lg:block absolute text-center left-1/2 -translate-x-1/2 bottom-0 text-[120px] lg:text-[167px] xl:text-[204px] 2xl:text-[260px] 3xl:text-[308px] leading-[1.2] font-heading text-dark-pink whitespace-nowrap z-2">
            Markéta Gregorová
          </h1>
          <div
            className="hidden lg:block absolute text-white
            lg:bottom-[380px] lg:right-0 xl:right-auto xl:bottom-[220px] 2xl:bottom-[280px] 3xl:bottom-[580px] left-0 lg:left-auto text-xl xl:text-2xl"
          >
            Pirátská poslankyně
            <br />
            v Evropském parlamentu,
            <br />
            chránící vaše občanské svobody.
          </div>
        </main>
        <div className="bg-light-pink text-dark-pink pt-8 pb-10 px-4 sm:text-2xl text-center lg:hidden z-2">
          Pirátská poslankyně v Evropském parlamentu,
          <br />
          chránící vaše občanské svobody.
        </div>
        <div className="bg-dark-pink">
          <Footer styles="hidden lg:flex" />
        </div>
      </div>
      <Footer styles="lg:hidden" />
    </div>
  );
};

export default Home;
