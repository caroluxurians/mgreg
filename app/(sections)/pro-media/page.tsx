import Header from "../../components/Header";
import HeaderMobile from "../../components/HeaderMobile";
import ClickUsSticker from "./ClickUsSticker";
import ContactCard from "./ContactCard";
import PressRelease from "./PressRelease";

const ProMedia = () => {
  return (
    <div className="bg-light-pink text-medium-pink">
      <HeaderMobile />
      <Header />
      <main className="flex flex-col">
        <div className="w-[350px] mx-auto">
          <div className="border-b border-red-pink mb-3">
            <h2 className="font-heading text-[35px] mt-3 pb-1">
              Kontakty
            </h2>
          </div>
          <div className="text-[14px]/[24px] mb-16">
            Fusce aliquam vestibulum ipsum. Quis autem vel<br />
            eum iure repreh enderit qui in ea voluptate velit<br />
            esse quam nihil molestiae consequatur, vel illum<br />
            qui dolorem eum fugiat.<br />
          </div>
          <div className="flex flex-col gap-5 mb-8 relative">
            <div className="flex absolute z-3 right-10 -top-18">
              <ClickUsSticker />
            </div>
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
        </div>
        <div className="bg-beige py-10">
          <div className="w-[350px] mx-auto">
            <div className="border-b border-red-pink mb-3">
              <h2 className="font-heading text-[35px] mt-3 pb-1">
                Tiskové zprávy
              </h2>
            </div>
            <div>
              <PressRelease index={1} />
              <PressRelease index={2} />
              <PressRelease index={3} />
              <PressRelease index={4} />
            </div>
            <div className="bg-medium-pink rounded-full text-white italic font-semibold text-[13px] text-center w-fit px-4 py-1 mx-auto mt-8">více tiskových zpráv</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProMedia;
