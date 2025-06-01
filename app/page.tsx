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
            <Image
              src="/marketa-landing-cropped.png"
              height={800}
              width={640}
              alt="Markéta Gregorová foto sm"
              unoptimized
              className="xl:hidden"
            />
            <Image
              src="/marketa-landing-cropped-3.png"
              height={1200}
              width={900}
              alt="Markéta Gregorová foto sm"
              unoptimized
              className="hidden xl:block xl:w-140
              "
            />
          </div>
          <h1 className="hidden lg:block absolute text-center left-1/2 -translate-x-1/2 bottom-0 text-[120px] lg:text-[170px] xl:text-[220px] leading-[1.2] font-heading text-dark-pink whitespace-nowrap">
            Markéta Gregorová
          </h1>
          <div className="hidden lg:block absolute top-[20%] 2xl:top-[25%] left-0 text-xl xl:text-2xl text-white">
            Pirátská poslankyně
            <br />
            v Evropském parlamentu,
            <br />
            chránící vaše občanské svobody.
          </div>
        </main>
        <div className="bg-light-pink text-dark-pink pt-8 pb-10 px-4 sm:text-2xl text-center lg:hidden">
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
