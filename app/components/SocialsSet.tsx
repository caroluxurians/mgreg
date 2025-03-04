import Image from "next/image";

const SocialsSet = () => {
  return (
    <div className="hidden sm:inline-flex flex-start gap-[30px] w-[173.54] h-[21.38]">
      <Image src="/instagram-dark.svg" height={21} width={21} alt="instagram icon" />
      <Image src="/x-dark.svg" height={21.34} width={23} alt="x icon" />
      <Image src="/youtube-dark.svg" height={21.38} width={30.54} alt="youtube icon" />
      <Image src="/facebook-dark.svg" height={21} width={9} alt="facebook icon" />
    </div>
  );
};

export default SocialsSet;
