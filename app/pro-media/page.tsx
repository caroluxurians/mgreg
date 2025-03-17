import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import ClickUsSticker from "./ClickUsSticker";
import ContactCard from "./ContactCard";

const ProMedia = () => {
  return (
    <div className="bg-light-pink text-medium-pink">
      <HeaderMobile />
      <Header
        display="hidden md:flex"
      />
      <main className="flex flex-col">
        <div className="w-[350px] mx-auto">
          <div className="border-b border-red-pink mb-3">
            <h2 className="font-heading text-[30px] mt-3 pb-1">
              Kontakty
            </h2>
          </div>
          <div className="text-[14px]/[24px] mb-6">
            Fusce aliquam vestibulum ipsum. Quis autem vel<br />
            eum iure repreh enderit qui in ea voluptate velit<br />
            esse quam nihil molestiae consequatur, vel illum<br />
            qui dolorem eum fugiat.<br />
          </div>
          <div className="flex flex-col gap-5 mb-8">
            <ContactCard
              imageSrc="/marketa-contact-card.png"
              name="Markéta Gregorová"
              title="Europoslankyně"
              alt="Markéta kontaktní karta"
            />
            <ContactCard
              imageSrc="/tomas-contact-card.png"
              name="Tomáš Polák"
              title="PR specialist"
              alt="Tomáš kontaktní karta"
            />
          </div>
          <ClickUsSticker />

        </div>

      </main>
    </div>
  );
};

export default ProMedia;
