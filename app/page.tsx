import Image from "next/image";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="h-screen max-h-screen lg:h-[620px] xl:h-[600px] 2xl:h-[660px] flex flex-col bg-light-pink">
      <Header display="flex justify-center" />
      <main
        className="relative flex-1 flex flex-col justify-start items-center mb-3 lg:mb-0 overflow-hidden pt-14 lg:pt-12 2xl:pt-10 2xl:w-[1267px] 2xl:mx-auto"
      >
        <div className="hidden lg:flex lg:flex-col text-white
         font-medium leading-none text-[17px] 2xl:text-[22px] absolute top-44 left-8 gap-1.5 xl:left-28 2xl:left-0"
        >
          <span>Pirátská poslankyně</span>
          <span>v Evropském parlamentu,</span>
          <span>chránící vaše občanské svobody.</span>
        </div>
        <Image
          src="/marketa-small.png"
          height={686}
          width={389}
          alt="Markéta Gregorová foto sm"
          className="ml-2 lg:ml-16 z-3 xl:hidden"
          unoptimized
        />

        <div className="absolute bg-light-pink z-2 rounded-full top-10 lg:top-4 lg:ml-4 xl:ml-2 2xl:mr-15 w-[516px] h-[516px] lg:w-[380px] lg:h-[380px] xl:w-[370px] xl:h-[370px] 2xl:w-[410px] 2xl:h-[410px] shadow-[0_0_40px_rgba(119,14,61,0.4)] md:shadow-[0_0_40px_rgba(119,14,61,0.8)]" />

        <Image
          src="/marketa-small.png"
          height={679}
          width={385}
          alt="Markéta Gregorová foto md"
          className="ml-14 z-3 hidden xl:block 2xl:hidden"
          unoptimized
        />
        <Image
          src="/marketa-large.png"
          height={800}
          width={453}
          alt="Markéta Gregorová foto lg"
          className="hidden 2xl:block ml-2 z-3"
          unoptimized
        />
        {/* <Image
          src="/cat-happy.svg"
          width={65}
          height={65}
          alt="happy cat"
          className="absolute top-8 right-18 rotate-30 z-1"
          unoptimized
        /> */}
        <div className="hidden lg:block text-[150px] xl:text-[198px] 2xl:text-[235px] font-heading text-dark-pink whitespace-nowrap z-5 absolute top-80 xl:top-70 2xl:top-75">
          Markéta Gregorová
        </div>
      </main>
      <div className="font-medium text-dark-pink text-center lg:hidden bg-light-pink pt-4 mb-8
      text-[15px] sm:text-[19px] md:text-[22px]
      md:pt-6 md:mb-12"
      >
        Pirátská poslankyně v Evropském parlamentu,<br />
        chránící vaše občanské svobody.
      </div>
      {/*
      <main
        className="flex flex-1 justify-center items-center relative overflow-hidden sm:px-[100px]"
        style={{ backgroundImage: "url('/gradient-large.png')" }}
      >
        <div className="hidden sm:block text-white
         font-medium leading-none text-[25px] absolute top-[250px] left-[100px]">
          Pirátská poslankyně<br />
          v Evropském parlamentu,<br />
          chránící vaše občanské svobody.
        </div>

        <div className="flex justify-center sm:hidden">
          <Image
            src="/marketa-small.png"
            height={686}
            width={389}
            alt="Markéta Gregorová foto"
            className="z-10 absolute bottom-[-14px] left-[calc(50%)] max-h-[686px] max-w-[389px]"
            unoptimized
          />
          <Image
            src="/ellipse.png"
            height={516}
            width={516}
            alt="ellipse behind Markéta"
            className="z-5 overflow-hidden max-w-none absolute bottom-[172px]"
            unoptimized
          />
          <Image
            src="/gradient-large.png"
            width={1250}
            height={1250}
            className="z-1 overflow-hidden max-w-none max-h-none"
            alt="shadow gradient behind Markéta"
            unoptimized
          />
          <div className="absolute bottom-0
           flex justify-center text-center sm:hidden w-screen h-[116px]
          bg-light-pink z-11 pt-9 text-[15px] font-medium text-dark-pink">
            Pirátská poslankyně v Evropském parlamentu,<br />
            chránící vaše občanské svobody.
          </div>
        </div>
        <div
          className="hidden sm:flex
          relative w-[567px] h-[1000px] 2xl:w-[683px] 2xl:h-[1206px] justify-center items-center"
        >
          <Image
            src="/marketa-ellipse.png"
            height={904}
            width={512}
            unoptimized
            alt="Markéta Gregorová foto"
            className="absolute
            top-[180px]
             sm:top-[240px]"

          />
          <h1 className="absolute top-[600px]
          text-[250px] font-heading text-dark-pink whitespace-nowrap">
            Markéta Gregorová
          </h1>
        </div>
      </main>
    */}
    </div>
  );
};

export default Home;
