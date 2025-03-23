import Image from "next/image";

const GalleryTemplate = ({ imageSrc = "/gallery-template-image.png", title }: { imageSrc?: string, title: string }) => {
  return (
    <div className="flex w-[270px] h-auto relative mx-auto">
      <Image
        src={imageSrc}
        height={265}
        width={387}
        alt="gallery image"
        unoptimized
      />
      <div className="text-white font-heading text-[35px]/[35px] absolute bottom-4 left-6 max-w-35">
        {title}
      </div>
    </div>
  );
};

export default GalleryTemplate;
