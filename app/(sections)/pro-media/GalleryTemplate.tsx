import classNames from "classnames";
import Image from "next/image";

type GalleryTemplateProps = {
  imageSrc?: string
  title: string
  styles?: string
};

const GalleryTemplate = ({ imageSrc = "/gallery-template-image.png", title, styles = "" }: GalleryTemplateProps) => {
  return (
    <div className={classNames(`flex w-[270px] h-auto relative sm:w-[260px] lg:w-[210px] xl:w-[256px] 2xl:w-[324px] ${styles}`)}>
      <Image
        src={imageSrc}
        height={265}
        width={387}
        alt="gallery image"
        unoptimized
      />
      <div className="text-white font-heading text-[35px]/[35px] absolute bottom-4 left-6 max-w-35 lg:text-[26px]/[26px] lg:max-w-26 lg:left-5 lg:bottom-3.5 xl:text-[34px]/[34px] xl:max-w-34 xl:bottom-4 2xl:text-[44px]/[44px] 2xl:max-w-44 2xl:bottom-5 2xl:left-6">
        {title}
      </div>
    </div>
  );
};

export default GalleryTemplate;
