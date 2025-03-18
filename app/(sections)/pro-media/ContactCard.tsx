import Image from "next/image";

type ContactCardProps = {
  imageSrc: string
  name: string
  title: string
  alt: string
};

const ContactCard = ({ imageSrc, name, title, alt }: ContactCardProps) => {
  return (
    <div className="flex w-[270px] h-auto relative mx-auto">
      <Image
        src={`${imageSrc}`}
        height={432}
        width={325}
        alt={alt}
        unoptimized
        className="rounded-[30px] w-full h-auto"
      />
      <div className="absolute top-5 left-6 flex flex-col">
        <div className="font-heading text-beige text-[40px]/[40px]">
          {name}
        </div>
        <div className="text-light-pink text-[18px]/[22px]">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
