import Image from "next/image";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";

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
        <div className="main-width mx-auto mb-12">
          <h2 className="font-heading title-font-size pb-2  lg:pb-1 xl:pb-2 3xl:pb-3">Aktuální portrét</h2>
          <div className="flex flex-col items-center gap-2">
            {images.map((image) => (
              <div className="w-70">
                <Image
                  src={`/gallery/aktualni-portret/${image}`}
                  height={200}
                  width={400}
                  alt="current portrait photo"
                  className="rounded-lg"
                />
              </div>
            ))}

          </div>
        </div>
      </main>
    </div>
  );
};

export default AktualniPortret;
