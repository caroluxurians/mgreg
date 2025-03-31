import Image from "next/image";

const SocialsSet = ({ color = "dark", classNames = "" }: { color?: string, classNames?: string }) => {
  return (
    <div className={`${classNames} gap-[30px]`}>
      {color === "dark"
        ? <>
          <Image src="/instagram-dark.svg" height={21} width={21} alt="instagram icon" />
          <Image src="x-dark.svg" height={21.34} width={23} alt="x icon" />
          <Image src="/youtube-dark.svg" height={21.38} width={30.54} alt="youtube icon" />
          <Image src="/facebook-dark.svg" height={21} width={9} alt="facebook icon" />
        </>
        : <>
          <Image src="/instagram-light.svg" height={21} width={21} alt="instagram icon" />
          <Image src="x-light.svg" height={21.34} width={23} alt="x icon" />
          <Image src="/youtube-light.svg" height={21.38} width={30.54} alt="youtube icon" />
          <Image src="/facebook-light.svg" height={21} width={9} alt="facebook icon" />
        </>
      }

    </div>
  );
};

export default SocialsSet;
