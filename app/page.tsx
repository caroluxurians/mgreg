import Image from "next/image";
import HeaderLanding from "./components/HeaderLanding";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="bg-dark-pink">
      <div className="flex flex-col">
        <HeaderLanding />
        <main className="md:flex-1 overflow-hidden relative bg-light-pink">
          <div className="flex justify-center">
            <Image
              src="/marketa-landing-cropped.png"
              height={800}
              width={640}
              alt="Markéta Gregorová foto sm"
              unoptimized
            />
          </div>
          <div className="flex justify-center">
            <h1 className="hidden md:block absolute bottom-0 text-[120px] lg:text-[170px] xl:text-[220px] leading-[1.2] font-heading text-dark-pink whitespace-nowrap">
              Markéta Gregorová
            </h1>
          </div>
          <div className="hidden md:block absolute top-[20%] left-[70px] text-[25px]">
            Pirátská poslankyně<br />
            v Evropském parlamentu,<br />
            chránící vaše občanské svobody.
          </div>
        </main>
        <div className="bg-light-pink text-dark-pink pt-8 pb-10 px-4 text-[15px] text-center md:hidden">
          Pirátská poslankyně v Evropském parlamentu,
          chránící vaše občanské svobody.
        </div>
        <Footer styles="bg-dark-pink hidden lg:grid !py-6" />
      </div>
      <Footer styles="bg-dark-pink lg:hidden" />
    </div>
  );
};

export default Home;
