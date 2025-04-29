import Image from "next/image";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";

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
  "IMG_4157.JPG",
  "IMG_4163.JPG",
  "marketa-gregorova.jpg",
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
        <div className="main-width mx-auto mb-12">
          <h2 className="font-heading title-font-size pb-2  lg:pb-1 xl:pb-2 3xl:pb-3">Akce</h2>
          <div className="flex flex-col items-center gap-2">
            {images.map((image) => (
              <a
                href={`/gallery/akce/${image}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-70">
                  <Image
                    src={`/gallery/akce/${image}`}
                    height={200}
                    width={400}
                    alt="akce photo"
                    className="rounded-lg"
                  />
                </div>
              </a>
            ))}

          </div>
        </div>
      </main>
    </div>
  );
};

export default Akce;
