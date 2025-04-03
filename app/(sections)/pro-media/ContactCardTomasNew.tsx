import Image from "next/image";


const ContactCardTomasNew = () => {
  return (
    <div className="bg-medium-pink overflow-hidden rounded-3xl flex w-[270px] h-[359px] relative mx-auto md:w-[200px] md:h-[266px] lg:w-[250px] lg:h-[332px] xl:w-[300px] 2xl:w-[325px]">
      <div className="absolute -bottom-18 w-82 -right-9 md:w-62 md:-bottom-14 md:-right-8">
        <Image
          src="/tomas-contact-card-new.png"
          height={432}
          width={325}
          alt="Tomas Polak contact card"
          unoptimized
          className="rounded-[30px] w-full h-auto md:rounded-[20px]"
        />
      </div>

      <div className="absolute top-5 left-6 flex flex-col md:top-4 md:left-4 xl:top-5 xl:left-6 2xl:top-6 2xl:left-7">
        <div className="font-heading text-beige text-[40px]/[40px] md:text-[30px]/[30px] lg:text-[38px]/[38px] xl:text-[46px]/[46px] 2xl:text-[50px]/[50px]">
          Tomáš Polák
        </div>
        <div className="text-light-pink text-[18px]/[22px] md:text-[14px]/[16px] lg:text-[16px]/[18px] xl:text-[18px]/[24px] 2xl:text-[20px]/[30px]">
          PR specialist
        </div>
      </div>
    </div>
  );
};

export default ContactCardTomasNew;
