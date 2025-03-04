import Image from "next/image";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="h-screen flex flex-col relative">
      <Header />
      <main
        className="flex flex-1 justify-center items-center relative overflow-hidden sm:px-[100px]"
        style={{ backgroundImage: "url('/gradient-large.png')" }}
      >
        <div className="hidden sm:block text-white font-medium leading-none text-[25px] absolute top-[250px] left-[100px]">
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
            className="z-10 absolute bottom-[-14px] right-[-8px]"
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
          <div className="absolute bottom-0 flex sm:hidden w-[339px] h-[116px] bg-light-pink z-11 pt-9 text-[15px] font-medium text-dark-pink px-auto text-center">
            Pirátská poslankyně v Evropském parlamentu,
            chránící vaše občanské svobody.
          </div>
        </div>
        <div
          className="hidden sm:flex relative w-[567px] h-[1000px] 2xl:w-[683px] 2xl:h-[1206px] justify-center items-center"
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
          <h1 className="absolute top-[600px] text-[250px] font-heading text-dark-pink whitespace-nowrap">
            Markéta Gregorová
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
