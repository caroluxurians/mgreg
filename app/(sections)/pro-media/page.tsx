import Header from "../../components/Header";
import HeaderMobile from "../../components/HeaderMobile";
import ContactCard from "./ContactCard";
import PressRelease from "./PressRelease";
import Sticker from "./Sticker";
import GalleryTemplate from "./GalleryTemplate";

const ProMedia = () => {
  return (
    <div className="bg-light-pink text-medium-pink">
      <HeaderMobile />
      <Header />
      <main className="flex flex-col">
        <div className="w-[350px] mx-auto sm:w-[560px] relative sm:mb-10">
          <div className="border-b border-red-pink mb-3 sm:mb-4 relative">
            <h2 className="font-heading text-[35px] mt-3 pb-1 sm:mt-6 sm:text-[40px]">
              Kontakty
            </h2>
          </div>
          <div className="text-[14px]/[24px] sm:text-[16px]/[26px] mb-16 sm:mb-8">
            Fusce aliquam vestibulum ipsum. Quis autem vel<br />
            eum iure repreh enderit qui in ea voluptate velit<br />
            esse quam nihil molestiae consequatur, vel illum<br />
            qui dolorem eum fugiat.<br />
          </div>
          <div className="flex flex-col gap-5 mb-8 sm:flex-row">
            <div className="flex absolute z-3 right-10 top-42 sm:top-7">
              <Sticker
                backgroundColor="bg-dark-pink"
                textColor="text-beige"
                content={(
                  <>
                    klikněte <br />
                    na nás
                  </>
                )}
              />
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

        <div className="bg-beige pt-8 pb-12 mb-8 sm:pt-10 sm:pb-16">
          <div className="w-[350px] mx-auto sm:w-[560px] sm:flex sm:flex-col sm:items-center">
            <div className="border-b border-red-pink mb-3">
              <h2 className="font-heading text-[35px] mt-3 pb-1 sm:text-[40px] sm:w-[560px]">
                Tiskové zprávy
              </h2>
            </div>
            <div className="sm:w-[500px]">
              <PressRelease index={1} />
              <PressRelease index={2} />
              <PressRelease index={3} />
              <PressRelease index={4} />
            </div>
            <div className="bg-medium-pink rounded-full text-white italic font-semibold text-[13px] text-center w-fit px-4 py-1 mx-auto mt-8 sm:text-[16px] sm:px-5 sm:py-1.5">
              více tiskových zpráv
            </div>
          </div>
        </div>

        <div className="w-[350px] mx-auto mb-10 relative sm:w-[560px] sm:mb-16">
          <div className="border-b border-red-pink mb-10 relative">
            <h2 className="font-heading text-[35px] mt-3 pb-3 sm:text-[40px] ">
              Galerie
            </h2>
          </div>
          <div className="grid gap-5">
            <div className="flex absolute z-3 right-3 top-2">
              <Sticker
                backgroundColor="bg-[#005F66]"
                textColor="text-light-pink"
                content={(
                  <>
                    volně ke<br />
                    stažení
                  </>
                )}
              />
            </div>
            <div className="flex flex-col gap-4 mx-auto sm:grid sm:grid-cols-2 sm:gap-4 ">
              <GalleryTemplate title="Ukrajina" />
              <GalleryTemplate title="Evropský parlament" />
              <GalleryTemplate title="Delší sdělení na dva řádky" />
              <GalleryTemplate title="Delší sdělení na dva řádky" />
              <GalleryTemplate title="Delší sdělení na dva řádky" />
              <GalleryTemplate title="Delší sdělení na dva řádky" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProMedia;
