import Image from "next/image";
import HeaderLanding from "./components/HeaderLanding";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="bg-dark-pink">
      <div className="flex flex-col md:min-h-screen bg-light-pink">
        <HeaderLanding />
        <main className="md:flex-1 relative bg-light-pink flex 2xl:w-[1267px] 2xl:mx-auto">
          <div className="flex grow justify-center items-end">
            <Image
              src="/marketa-landing-cropped.png"
              height={800}
              width={640}
              alt="Markéta Gregorová foto sm"
              unoptimized
            />
          </div>
          <h1 className="hidden md:block absolute text-center left-1/2 -translate-x-1/2 bottom-0 text-[120px] lg:text-[170px] xl:text-[220px] leading-[1.2] font-heading text-dark-pink whitespace-nowrap">
            Markéta Gregorová
          </h1>
          <div className="hidden md:block absolute top-[20%] md:left-10 2xl:left-0 text-[17px] lg:text-[22px] xl:text-[25px]">
            Pirátská poslankyně<br />
            v Evropském parlamentu,<br />
            chránící vaše občanské svobody.
          </div>
        </main>
        <div className="bg-light-pink text-dark-pink pt-8 pb-10 px-4 text-[15px] text-center md:hidden">
          Pirátská poslankyně v Evropském parlamentu,
          chránící vaše občanské svobody.
        </div>
        <div className="bg-dark-pink">
          <Footer styles="hidden lg:grid !py-6" />
        </div>
      </div>
      <Footer styles="bg-dark-pink lg:hidden" />
    </div>
  );
};

export default Home;
