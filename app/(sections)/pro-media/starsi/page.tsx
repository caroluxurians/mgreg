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
        <div className="main-width mx-auto mt-5 mb-14">
          <div className="flex justify-between mb-4">
            <BackToGalleryButton />
            <DownloadPhotosButton />
          </div>
          <h2 className="font-heading title-font-size border-b border-red-pink pb-2 mb-4 lg:pb-1 xl:pb-2 3xl:pb-3">
            Starší
          </h2>
          <div className="flex flex-col items-center gap-2 mb-8">
            {images.map((image) => (
              <a
                href={`/gallery/starsi/${image}`}
                target="_blank"
                rel="noreferrer"
                key={image}
              >
                <div className="w-70">
                  <Image
                    src={`/gallery/starsi/${image}`}
                    height={200}
                    width={400}
                    alt="older photo"
                    className="rounded-lg transition-transform hover:scale-105 duration-300"
                  />
                </div>
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
