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
        <div className="w-[350px] mx-auto mt-4 sm:mt-0 sm:w-[560px] relative sm:mb-10 md:w-[700px] md:mb-16 lg:w-[900px] xl:w-[1100px] xl:mb-26 2xl:w-[1400px]">

          <div className="border-b border-red-pink mb-4 sm:mt-6 sm:mb-4 relative md:mb-5 lg:mb-4 xl:mb-6">
            <h2 className="font-heading text-[35px] pb-2 sm:text-[40px] md:text-[60px] lg:pb-1 xl:text-[80px] xl:pb-2 2xl:text-[90px]">
              Kontakty
            </h2>
          </div>

          <div className="md:flex md:gap-4 lg:gap-7">
            <div className="text-[14px]/[24px] mb-18 sm:text-[16px]/[26px] sm:mb-8 md:hidden">
              Fusce aliquam vestibulum ipsum. Quis autem vel<br />
              eum iure repreh enderit qui in ea voluptate velit<br />
              esse quam nihil molestiae consequatur, vel illum<br />
              qui dolorem eum fugiat.<br />
            </div>
            <div className="hidden md:block text-[16px]/[26px] w-55 lg:w-80 lg:pr-7 xl:text-[20px]/[30px] xl:w-90 xl:mr-10 2xl:text-[22px]/[32px]">
              Fusce aliquam vestibulum ipsum. Quis autem vel
              eum iure repreh enderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat.
            </div>
            <div className="flex flex-col gap-6 mb-8 sm:flex-row md:mb-0 md:mt-1 lg:mt-2 xl:gap-8">
              <div className="flex absolute z-3 right-10 top-42 sm:top-7 sm:right-7 md:top-17 md:right-10 lg:top-16 lg:right-7 xl:top-22 xl:right-10">
                <Sticker
                  backgroundColor="bg-medium-pink"
                  textColor="text-beige"
                  additionalStyles="pt-1"
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
        </div>

        <div className="bg-beige pt-8 pb-12 mb-8 sm:pt-10 sm:pb-16 xl:pt-16 xl:pb-26">
          <div className="w-[350px] mx-auto sm:w-[560px] sm:flex sm:flex-col sm:items-center md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1400px]">

            <div className="border-b border-red-pink mb-3 md:mb-2">
              <h2 className="font-heading text-[35px] pb-2 sm:text-[40px] sm:w-[560px] md:w-[700px] md:text-[60px] lg:w-[900px] xl:w-[1100px] xl:text-[80px] 2xl:w-[1400px] 2xl:text-[90px]">
                Tiskové zprávy
              </h2>
            </div>
            <div className="mb-8 sm:w-[500px] sm:mb-10 md:w-[700px] md:grid md:grid-cols-2 md:gap-x-8 md:mb-12 lg:w-[900px] lg:gap-x-16 xl:w-[1100px] xl:mb-16 2xl:w-[1400px]">
              <PressRelease index={1} />
              <PressRelease index={2} />
              <PressRelease index={3} />
              <PressRelease index={4} />
            </div>
            <div className="bg-medium-pink rounded-full text-white italic font-semibold text-[13px] text-center w-fit px-4 py-1 mx-auto sm:text-[16px] sm:px-5 sm:py-1.5 md:text-[18px]">
              více tiskových zpráv
            </div>
          </div>
        </div>

        <div className="w-[350px] mx-auto mb-10 relative sm:w-[560px] sm:mb-16 md:w-[700px] lg:w-[900px] lg:mb-20 xl:w-[1100px] xl:mb-32 2xl:w-[1400px]">

          <div className="border-b border-red-pink mb-8 sm:mb-10 relative md:mb-8 lg:mb-8 xl:mb-10">
            <h2 className="font-heading text-[35px] pb-2 sm:text-[40px] md:text-[60px] lg:pb-2 xl:text-[80px] 2xl:text-[90px]">
              Galerie
            </h2>
          </div>

          <div className="grid gap-5">
            <div className="flex absolute z-3 right-3 -top-2 sm:top-0 sm:right-7 md:top-7 md:right-10 lg:top-7 lg:right-14 xl:top-11">
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
            <div className="flex flex-col gap-4 mx-auto sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 xl:gap-5">
              <GalleryTemplate title="Ukrajina" />
              <GalleryTemplate title="Evropský parlament" />
              <GalleryTemplate title="Delší sdělení na dva řádky" />
              <GalleryTemplate title="Delší sdělení na dva řádky" />
              <GalleryTemplate title="Delší sdělení na dva řádky" />
              <GalleryTemplate title="Delší sdělení na dva řádky" />
              <GalleryTemplate title="Delší sdělení na dva řádky" styles="hidden lg:flex" />
              <GalleryTemplate title="Delší sdělení na dva řádky" styles="hidden lg:flex" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProMedia;
