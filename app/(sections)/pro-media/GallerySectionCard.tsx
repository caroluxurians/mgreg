import classNames from "classnames";
import Image from "next/image";

type GallerySectionCardProps = {
  styles?: string
  imageSrc?: string
  gallerySectionName?: string
};

const GallerySectionCard = ({ styles = "", imageSrc = "", gallerySectionName = "" }: GallerySectionCardProps) => {
  return (
    <div className={classNames(`flex w-68 h-auto relative sm:w-65 md:w-84 lg:w-96 xl:w-64 2xl:w-81 3xl:w-97 ${styles}`)}>
      <Image
        src={imageSrc}
        height={265}
        width={387}
        alt="gallery image"
        unoptimized
        className="rounded-2xl"
      />
      <div className="text-white font-heading text-4xl leading-none absolute bottom-4 left-6 max-w-35 lg:text-5xl lg:max-w-26 lg:left-6 lg:bottom-5 xl:text-[34px]/[34px] xl:max-w-34 xl:bottom-4 2xl:text-[44px]/[44px] 2xl:max-w-44 2xl:bottom-5 2xl:left-6 3xl:text-[50px]/[50px] 3xl:max-w-50 3xl:bottom-6.5 3xl:left-9">
        {gallerySectionName}
      </div>
    </div>
  );
};

export default GallerySectionCard;
