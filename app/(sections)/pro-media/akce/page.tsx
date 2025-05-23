import Image from "next/image";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import BackToGalleryButton from "../BackToGalleryButton";
import DownloadPhotosButton from "../DownloadPhotosButton";

const images = [
  "1281-1920-max.jpg",
  "1920-1281-max.jpg",
  "2024_04_30_pirati_stvanice_2400px-7094.jpg",
  "2024_04_30_pirati_stvanice_2400px-7240.jpg",
  "2024_04_30_pirati_stvanice_2400px-7421.jpg",
  "2024_04_30_pirati_stvanice_2400px-8207.jpg",
  "2024_11_09_pirati_CF_2400px-0603.jpg",
  "2024_11_09_pirati_CF_2400px-0830.jpg",
  "240506_dscf2748.jpg",
  "54320692896_8f6e282e1b_o.jpg",
  "9Q9A1187.jpg",
  "9Q9A1215.jpg",
  "9Q9A1283.jpg",
  "9Q9A1284.jpg",
  "9Q9A1330.jpg",
  "9Q9A1375.jpg",
  "9Q9A1405.jpg",
  "cf-14.jpg",
  "cf-15.jpg",
  "cf-5.jpg",
  "cf-8.jpg",
  "cf-9.jpg",
  "DSC00634.JPEG",
  "DSC00771.JPEG",
  "DSC00791 2.JPEG",
  "DSC09735.jpg",
  "IMG_2861.JPG",
  "IMG_2865.JPG",
  "IMG_2867.JPG",
  "IMG_2868.JPG",
  "IMG_2874.JPG",
  "IMG_3382.JPG",
  "IMG_4019.JPG",
  "IMG_4037.JPG",
  "IMG_4038.JPG",
  "IMG_4137.JPG",
  "IMG_4163.JPG",
  "marketa-gregorova.jpg",
  "IMG_4157.JPG",
  "P1299588.jpg",
  "P1299630.jpg",
  "P1299691.jpg",
  "Untitled design-3-2.jpg",
];

const Akce = () => {
  return (
    <div className="bg-light-pink text-medium-pink">
      <HeaderMobile />
      <Header />
      <main className="flex flex-col">
        <div className="main-width mx-auto mt-5 mb-14 md:mt-7 lg:mt-10 lg:mb-18 xl:mt-10 2xl:mt-14 2xl:mb-20">
          <div className="flex justify-between mb-4 lg:mb-5 xl:mb-6 2xl:mb-8">
            <BackToGalleryButton />
            <DownloadPhotosButton fileSize="26 MB" href="https://mrak.pirati.cz/s/LKgZ68jBSYKwtLF" />
          </div>
          <h2 className="font-heading title-font-size border-b border-red-pink pb-2 mb-4 sm:pb-2 sm:mb-5 lg:pb-3 xl:pb-2 3xl:pb-3">
            Akce
          </h2>
          <div className="flex flex-col items-center gap-3 mb-8 sm:grid grid-cols-2 sm:gap-4 md:grid-cols-3 lg:mb-10 xl:grid-cols-4 3xl:grid-cols-5">
            {images.map((image) => (
              <a
                href={`/gallery/akce/${image}`}
                target="_blank"
                rel="noreferrer"
                key={image}
                className="relative w-70 h-46 sm:w-68 sm:h-44 md:w-56 md:h-34 lg:w-72 lg:h-48 xl:w-66 xl:h-42 2xl:w-84 2xl:h-56 3xl:w-80 3xl:h-52"
              >

                <Image
                  src={`/gallery/akce/${image}`}
                  fill
                  alt="akce photo"
                  className="rounded-lg transition-transform hover:scale-105 duration-300 object-cover"
                />

              </a>
            ))}
          </div>
          <div className="flex justify-between">
            <BackToGalleryButton />
            <DownloadPhotosButton fileSize="26 MB" href="https://mrak.pirati.cz/s/LKgZ68jBSYKwtLF" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Akce;
