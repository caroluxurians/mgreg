import Image from "next/image";

const ContactCardMarketa = () => {
  return (
    <div className="bg-medium-pink overflow-hidden rounded-3xl flex w-[270px] h-[359px] relative mx-auto md:w-[200px] md:h-[266px] lg:w-[250px] lg:h-[332px] xl:w-[300px] xl:h-[399px] 2xl:w-[325px] 2xl:h-[432px]">
      <div className="absolute -bottom-38 w-82 -right-7 md:w-62 md:-bottom-29 md:-right-6 lg:w-74 lg:-bottom-34 lg:-right-5 xl:w-87 xl:-bottom-40 xl:-right-4 2xl:w-94 2xl:-right-5 2xl:-bottom-43">
        <Image
          src="/marketa-contact-card-new.png"
          height={432}
          width={325}
          alt="Markéta kontaktní karta"
          unoptimized
          className="rounded-[30px] w-full h-auto md:rounded-[20px]"
        />
      </div>
      <div className="absolute top-5 left-6 flex flex-col md:top-4 md:left-4 xl:top-5 xl:left-6 2xl:top-6 2xl:left-7">
        <div className="font-heading text-beige text-[40px]/[40px] md:text-[30px]/[30px] lg:text-[38px]/[38px] xl:text-[46px]/[46px] 2xl:text-[50px]/[50px]">
          Markéta Gregorová
        </div>
        <div className="text-light-pink text-[18px]/[22px] md:text-[14px]/[16px] lg:text-[16px]/[18px] xl:text-[18px]/[24px] 2xl:text-[20px]/[30px]">
          Europoslankyně
        </div>
      </div>
    </div>
  );
};

export default ContactCardMarketa;
