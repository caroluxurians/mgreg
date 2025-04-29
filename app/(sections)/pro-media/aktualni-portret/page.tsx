import Image from "next/image";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import BackToGalleryButton from "../BackToGalleryButton";
import DownloadPhotosButton from "../DownloadPhotosButton";

const images = [
  "Gregorova-046.jpg",
  "Gregorova-067.jpg",
  "Gregorova-116.jpg",
  "Gregorova-145.jpg",
  "Gregorova-147.jpg",
  "Gregorova-194.jpg",
  "Gregorova-229.jpg",
  "Gregorova-238.jpg",
  "Gregorova-240.jpg",
  "Gregorova-247.jpg",
  "Gregorova-258.jpg",
  "Gregorova-299.jpg",
  "Gregorova-313.jpg",
  "Gregorova-367.jpg",
  "Gregorova-371.jpg",
  "Gregorova-378.jpg",
  "Gregorova-391.jpg",
  "Gregorova-413.jpg",
  "Gregorova-426.jpg",
  "Gregorova-446.jpg",
  "Gregorova-449.jpg",
  "Gregorova-450.jpg",
  "Gregorova-455.jpg",
  "Gregorova-507.jpg",
  "Gregorova-515.jpg",
  "Gregorova-524.jpg",
  "Gregorova-536.jpg",
  "Gregorova-561.jpg",
  "Gregorova-565.jpg",
  "Gregorova-569.jpg",
  "Gregorova-596.jpg",
  "Gregorova-611.jpg",
  "Gregorova-623.jpg",
  "Gregorova-644.jpg",
  "Gregorova-710.jpg",
  "Gregorova-741.jpg",
  "Gregorova-749.jpg",
  "Gregorova-758.jpg",
  "Gregorova-788.jpg",
  "Gregorova-803.jpg",
  "Gregorova-811.jpg",
  "Gregorova-819.jpg",
  "Gregorova-827.jpg",
  "Gregorova-849.jpg",
  "Gregorova-856.jpg",
  "Gregorova-858.jpg",
  "Gregorova-862.jpg",
  "Gregorova-876.jpg",
];

const AktualniPortret = () => {
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
            Aktuální portrét
          </h2>
          <div className="flex flex-col items-center gap-3 mb-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7">
            {images.map((image) => (
              <a
                href={`/gallery/aktualni-portret/${image}`}
                target="_blank"
                rel="noreferrer"
                key={image}
                className="relative w-60 h-90 sm:w-68 sm:h-100 md:w-56 md:h-80 lg:w-54 xl:w-52 2xl:w-56 2xl:h-84"
              >
                <Image
                  src={`/gallery/aktualni-portret/${image}`}
                  fill
                  alt="current portrait photo"
                  className="rounded-lg transition-transform hover:scale-104 duration-300 object-cover"
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

export default AktualniPortret;
