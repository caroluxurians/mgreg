import Image from "next/image";
import Header from "@/app/components/Header";
import HeaderMobile from "@/app/components/HeaderMobile";
import BackToGalleryButton from "../BackToGalleryButton";
import DownloadPhotosButton from "../DownloadPhotosButton";

const images = [
  "1647515680476_20220317_EP-128267A_PB9_099.jpg",
  "1649230343027_20220405_EP-129130I_ENG_558.jpg",
  "1649316679643_20220406_EP-129133J_MCH_548.jpg",
  "1651606217354_20220503_EP-130343J_STP_157.jpg",
  "1651685534603_20220504_EP-130344D_MCH_330.jpg",
  "1652885745782_20220518_EP-131364B_EVD_EG_0057.jpg",
  "1663229902635_20220915_EP-136220A_ARO_EG_072.jpg",
  "1666102336735_20221018_EP-138314F_CUG_019.jpg",
  "1666200672436_20221019_EP-138315I_CCR_EVD_026.jpg",
  "1668076074988_20221110_EP-139429B_AHA_EG_0717.jpg",
  "1671005112013_20221213_EP-141745I_CCR_053.jpg",
  "1674116668502_20230118_EP-142852I_GEN_556.jpg",
  "1676305709480_20230213_EP-144939A_AHA_AHA_014.jpg",
  "1676536419943_20230215_EP-144947I_MCH_482.jpg",
  "1678818926848_20230314_EP-146778H_CCR_PST_033.jpg",
  "1683726834126_20230510_EP-149878E_CUG_EG_017.jpg",
  "1683738156021_20230510_EP-149878H_MCH_PST_0024.jpg",
  "1694632557622_20230913_EP-155109H_ENG_PS_035.jpg",
  "1696270542566_20231002_EP-156397D_FMA_AHA_035.jpg",
  "1696347325380_20231003_EP-156398J_CUG_FMA_082.jpg",
  "1696352133686_20231003_EP-156398F_CCR_PST_040.jpg",
  "1697528817533_20231017_EP-157389A_CU__036.jpg",
  "1700681825603_20231122_EP-159342E_HAS_PST_052.jpg",
  "1700728470767_20231122_EP-159342H_ENG_0349.jpg",
  "1702393013292_20231212_EP-161040G_STP_PST_PBU_047.jpg",
  "1705566876526_20240117_EP-162309J_CCR_0033.jpg",
  "1707315218429_20240207_EP-163732D_FM1_AR_120.jpg",
  "1709146356706_20240228_EP-164967H_ENG_PST_034.jpg",
  "1709194001597_20240228_EP-164967O_CCR_0038.jpg",
  "1713889308293_20240423_EP-168659H_AH1_EVD_014.jpg",
  "1713984544775_20240424_EP-168661K_ENG_PST_016.jpg",
  "1726567038906_20240917_EP-171917A_AR2_EG_193.jpg",
  "1726572037881_20240917_EP-171917B_LD2_AH_047.jpg",
  "1726732309775_20240918_EP-171918G_CCR_0915.jpg",
  "1727713788349_20240930_EP-172841A_DE1_658.jpg",
  "1727944598649_20241003_EP-172925A_LD1_094.jpg",
  "1727967280156_20241003_EP-172944A_AR2_873.jpg",
  "1727967659637_20241003_EP-172944A_AR2_590.jpg",
  "1728404140045_20241008_EP-173149G_CCR_AR_034.jpg",
  "1729583895370_20241022_EP-174101A_AH1_0026.jpg",
  "1730840601818_20241105_EP-174134A_AH1_201.jpg",
  "1730921006549_20241106_EP-174142A_DE2_107.jpg",
  "1731527887486_20241113_EP-175119F_J2__023.jpg",
  "1731531508465_20241113_EP-175119E_J2__026.jpg",
  "1731597296952_20241114_EP-175122C_EGZ_0901.jpg",
  "1732612943421_20241126_EP-176158A_AHA_EG_072.jpg",
  "1734445606579_20241217_EP-177465E_LD1_143.jpg",
  "1737452485245_20250121_EP-178170A_AH1_390.jpg",
  "1737461916022_20250121_EP-178170A_PHB_1049.jpg",
  "1739272815237_20250211_EP-179654M_FM2_EG_072.jpg",
  "1741717643337_20250311_EP-181259G_CCR_PST_119.jpg",
];

const EvropskyParlament = () => {
  return (
    <div className="bg-light-pink text-medium-pink">
      <HeaderMobile />
      <Header />
      <main className="flex flex-col">
        <div className="main-width mx-auto mt-5 mb-14 md:mt-7 lg:mt-10 lg:mb-18 xl:mt-10 2xl:mt-14 2xl:mb-20">
          <div className="flex justify-between mb-4 lg:mb-5 xl:mb-6 2xl:mb-8">
            <BackToGalleryButton />
            <DownloadPhotosButton fileSize="38 MB" href="https://mrak.pirati.cz/s/WomBqFnHZqDKHgP" />
          </div>
          <h2 className="font-heading title-font-size border-b border-red-pink pb-2 mb-4 sm:pb-2 sm:mb-5 lg:pb-3 xl:pb-2 3xl:pb-3">Evropský parlament</h2>
          <div className="flex flex-col items-center gap-3 mb-8 sm:grid grid-cols-2 sm:gap-4 md:grid-cols-3 lg:mb-10 xl:grid-cols-4 3xl:grid-cols-5">
            {images.map((image) => (
              <a
                href={`/gallery/evropsky-parlament/${image}`}
                target="_blank"
                rel="noreferrer"
                key={image}
                className="relative w-70 h-46 sm:w-68 sm:h-44 md:w-56 md:h-34 lg:w-72 lg:h-48 xl:w-66 xl:h-42 2xl:w-84 2xl:h-56 3xl:w-80 3xl:h-52"
              >
                <Image
                  src={`/gallery/evropsky-parlament/${image}`}
                  fill
                  alt="european parliament photo"
                  className="rounded-lg transition-transform hover:scale-105 duration-300 object-cover"
                />
              </a>
            ))}
          </div>
          <div className="flex justify-between">
            <BackToGalleryButton />
            <DownloadPhotosButton fileSize="38 MB" href="https://mrak.pirati.cz/s/WomBqFnHZqDKHgP" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EvropskyParlament;
