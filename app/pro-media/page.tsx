import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";

const ProMedia = () => {
  return (
    <div className="bg-light-pink text-dark-pink">
      <HeaderMobile />
      <Header
        display="hidden md:flex"
      />
      <main className="flex flex-col">
        <div className="w-[350px] mx-auto">
          <div className="border-b border-medium-pink mb-3">
            <h2 className="font-heading text-[30px] mt-3 pb-1">Kontakty</h2>
          </div>
          <div className=" text-[14px]/[24px]">
            Fusce aliquam vestibulum ipsum. Quis autem vel<br />
            eum iure repreh enderit qui in ea voluptate velit<br />
            esse quam nihil molestiae consequatur, vel illum<br />
            qui dolorem eum fugiat.<br />
          </div>
        </div>

      </main>
    </div>
  );
};

export default ProMedia;
