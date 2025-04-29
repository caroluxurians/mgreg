import Image from "next/image";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import BackToGalleryButton from "../BackToGalleryButton";
import DownloadPhotosButton from "../DownloadPhotosButton";

const images = [
  "2022_12_15_marketa_Gregorova_1920px-4549.jpg",
  "2022_12_15_marketa_Gregorova_1920px-5017.jpg",
  "2022_12_15_marketa_Gregorova_1920px-4638.jpg",
  "2022_12_15_marketa_Gregorova_1920px-5032.jpg",
  "2022_12_15_marketa_Gregorova_1920px-4662.jpg",
  "2022_12_15_marketa_Gregorova_1920px-5271.jpg",
  "2022_12_15_marketa_Gregorova_1920px-4720.jpg",
  "DSC_0361.jpg",
  "2022_12_15_marketa_Gregorova_1920px-4733.jpg",
  "DSC_1430.jpg",
  "2022_12_15_marketa_Gregorova_1920px-4800.jpg",
  "DSC_9578.jpg",
  "2022_12_15_marketa_Gregorova_1920px-4808.jpg",
  "MG_021.jpg",
  "2022_12_15_marketa_Gregorova_1920px-4902.jpg",
  "MG_023.jpg",
  "2022_12_15_marketa_Gregorova_1920px-4959.jpg",
  "MG_032.jpg",
  "2022_12_15_marketa_Gregorova_1920px-4975.jpg",
];

const Starsi = () => {
  return (
    <div className="bg-light-pink text-medium-pink">
      <HeaderMobile />
      <Header />
      <main className="flex flex-col">
        <div className="main-width mx-auto mt-5 mb-14 md:mt-7 lg:mt-10 lg:mb-18 xl:mt-10 2xl:mt-14 2xl:mb-20">
          <div className="flex justify-between mb-4 lg:mb-5 xl:mb-6 2xl:mb-8">
            <BackToGalleryButton />
            <DownloadPhotosButton />
          </div>
          <h2 className="font-heading title-font-size border-b border-red-pink pb-2 mb-4 sm:pb-2 sm:mb-5 lg:pb-3 xl:pb-2 3xl:pb-3">
            Starší
          </h2>
          <div className="flex flex-col items-center gap-3 mb-8 sm:grid grid-cols-2 sm:gap-4 md:grid-cols-3 lg:mb-10 xl:grid-cols-4 3xl:grid-cols-5">
            {images.map((image) => (
              <a
                href={`/gallery/starsi/${image}`}
                target="_blank"
                rel="noreferrer"
                key={image}
                className="relative w-70 h-46 sm:w-68 sm:h-44 md:w-56 md:h-34 lg:w-72 lg:h-48 xl:w-66 xl:h-42 2xl:w-84 2xl:h-56 3xl:w-80 3xl:h-52"
              >
                <Image
                  src={`/gallery/starsi/${image}`}
                  fill
                  alt="older photo"
                  className="rounded-lg transition-transform hover:scale-105 duration-300 object-cover"
                />
              </a>
            ))}
          </div>
          <div className="flex justify-between">
            <BackToGalleryButton />
            <DownloadPhotosButton />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Starsi;
