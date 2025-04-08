import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import Article from "./Article";

const Clanky = () => {
  return (
    <div className="bg-beige">
      <HeaderMobile />
      <Header />
      <main className="flex flex-col">
        <div className="main-width mx-auto">
          <div className="font-heading title-font-size text-medium-pink border-b border-light-pink my-7 pb-3">
            Moje články
          </div>
          <div className="flex flex-col gap-6 mb-6">
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
          <div className="mb-10">paginace</div>
        </div>
      </main>
    </div>
  );
};

export default Clanky;
