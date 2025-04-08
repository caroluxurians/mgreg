import Header from "../../components/Header";
import HeaderMobile from "../../components/HeaderMobile";
import ContactCard from "./ContactCard";
import PressRelease from "./PressRelease";
import Sticker from "./Sticker";
import GalleryTemplate from "./GalleryTemplate";
import ContactCardTomasNew from "./ContactCardTomasNew";

const ProMedia = () => {
  return (
    <div className="bg-light-pink text-medium-pink">
      <HeaderMobile />
      <Header />
      <main className="flex flex-col">
        <div className="main-width mx-auto mt-4 mb-4 sm:mt-0 relative sm:mb-10 md:mb-16 xl:mb-26 2xl:mb-32">

          <div className="border-b border-red-pink mb-4 sm:mt-6 sm:mb-4 relative md:mb-5 lg:mb-4 xl:mb-6 2xl:mb-8 3xl:mb-10">
            <h2 className="font-heading title-font-size pb-2  lg:pb-1 xl:pb-2 3xl:pb-3">
              Kontakty
            </h2>
          </div>

          <div className="md:flex md:gap-4 lg:gap-7 2xl:gap-28">
            <div className="paragraph-font-size w-66 mb-24 sm:mb-8 sm:w-76 md:w-56 lg:w-74 lg:pr-7 xl:w-94 xl:mr-10 2xl:mr-0 2xl:w-104 3xl:w-120">
              Potřebujete mě kontaktovat? Napište mi na e-mail
              uvedený po najetí na kartu kontaktu. Pokud jde o
              mediální vystoupení či komentář, neváhejte se
              obrátit na PR specialistu Tomáše Poláka.
            </div>
            <div className="flex flex-col gap-6 mb-8 sm:flex-row md:mb-0 md:mt-1 lg:mt-2 xl:gap-8">
              <div className="flex absolute z-3 right-10 top-44 sm:top-7 sm:right-7 md:top-6 md:right-10 lg:top-8 lg:right-13 xl:top-11 xl:right-6 2xl:right-48 2xl:top-14 3xl:right-40">
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
              <ContactCardTomasNew />
            </div>
          </div>
        </div>

        <div className="bg-beige pt-8 pb-12 mb-8 sm:pt-10 sm:pb-16 xl:pt-16 xl:pb-26 2xl:pb-32 2xl:pt-18">
          <div className="main-width mx-auto sm:flex sm:flex-col sm:items-center">

            <div className="border-b border-red-pink mb-3 md:mb-2">
              <h2 className="font-heading main-width title-font-size pb-2">
                Tiskové zprávy
              </h2>
            </div>
            <div className="mb-8 main-width px-2 sm:mb-10 sm:px-10 md:grid md:grid-cols-2 md:gap-x-8 md:mb-12 lg:gap-x-16 xl:mb-16 2xl:mb-20 3xl:gap-x-22">
              <PressRelease index={1} />
              <PressRelease index={2} />
              <PressRelease index={3} />
              <PressRelease index={4} />
            </div>
            <div className="bg-medium-pink rounded-full text-white italic font-semibold text-[13px] text-center w-fit pl-4 pr-5 py-1 mx-auto sm:text-[16px] sm:pl-5 sm:pr-6 sm:py-1.5 md:text-[18px] md:pr-8 md:pl-6 2xl:text-[20px] 2xl:pl-7 2xl:pr-9 2xl:py-2">
              více tiskových zpráv
            </div>
          </div>
        </div>

        <div className="main-width mx-auto mb-10 relative  sm:mb-16 lg:mb-20 xl:mb-32">

          <div className="border-b border-red-pink mb-8 sm:mb-10 relative md:mb-8 lg:mb-8 xl:mb-10">
            <h2 className="font-heading title-font-size pb-2  lg:pb-2">
              Galerie
            </h2>
          </div>

          <div className="grid gap-5">
            <div className="flex absolute z-3 right-3 -top-1 sm:-top-3 sm:right-7 md:-top-2 md:right-10 lg:top-7 lg:right-14 xl:top-11 2xl:right-22 2xl:top-9 3xl:top-11 3xl:right-26">
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
            <div className="flex flex-col gap-4 mx-auto sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 xl:gap-5 2xl:gap-7">
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
