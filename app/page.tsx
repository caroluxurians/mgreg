import Image from "next/image";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
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
            unoptimized
            alt="Markéta Gregorová foto"
            className="absolute top-[40px]"
          />

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
