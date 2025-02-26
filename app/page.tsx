import Image from "next/image";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="relative bg-light-pink flex-1 flex flex-col">
      <Header />
      <main className="flex flex-1 justify-center items-center relative">
        <div className="text-[20px] absolute top-[250px] left-[100px]">
          Pirátská poslankyně<br />
          v Evropském parlamentu,<br />
          chránící vaše občanské svobody.
        </div>
        <div className="relative w-[567px] h-[1000px] 2xl:w-[683px] 2xl:h-[1206px] flex justify-center items-center">
          <Image
            src="/ellipse.png"
            height={300}
            width={300}
            alt="ellipse behind Markéta"
            className="absolute top-[75px]"
          />
          <Image
            src="/marketa-small.png"
            height={1206}
            width={683}
            unoptimized
            alt="Markéta Gregorová foto"
            sizes="(max-width: 768px) 250px, (max-width: 1440px) 350px, 500px"
            className="absolute
             top-[50px] sm:top-[80px] lg:top-[40px]
             w-[250px] sm:w-[350px] lg:w-[500px]"

          />
          <h1 className="absolute top-[420px] 2xl:top-[735px] text-[200px] 2xl:text-[200px] font-heading text-dark-pink whitespace-nowrap">
            Markéta Gregorová
          </h1>
        </div>

      </main>
    </div>
  );
};

export default Home;
