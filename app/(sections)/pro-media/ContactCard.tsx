import Image from "next/image";

type ContactCardProps = {
  imageSrc: string
  name: string
  title: string
  alt: string
};

const ContactCard = ({ imageSrc, name, title, alt }: ContactCardProps) => {
  return (
    <div className="flex w-[270px] h-auto relative mx-auto md:w-[200px] lg:w-[250px]">
      <Image
        src={`${imageSrc}`}
        height={432}
        width={325}
        alt={alt}
        unoptimized
        className="rounded-[30px] w-full h-auto md:rounded-[20px]"
      />
      <div className="absolute top-5 left-6 flex flex-col md:top-4 md:left-4">
        <div className="font-heading text-beige text-[40px]/[40px] md:text-[30px]/[30px] lg:text-[38px]/[38px]">
          {name}
        </div>
        <div className="text-light-pink text-[18px]/[22px] md:text-[14px]/[16px] lg:text-[16px]/[18px]">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
