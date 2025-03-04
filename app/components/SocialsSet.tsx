import Image from "next/image";

const SocialsSet = ({ color, classNames = "" }: { color: string, classNames?: string }) => {
  return (
    <div className={`${classNames} flex-start gap-[30px]`}>
      <Image src={`/instagram-${color}.svg`} height={21} width={21} alt="instagram icon" />
      <Image src={`/x-${color}.svg`} height={21.34} width={23} alt="x icon" />
      <Image src={`/youtube-${color}.svg`} height={21.38} width={30.54} alt="youtube icon" />
      <Image src={`/facebook-${color}.svg`} height={21} width={9} alt="facebook icon" />
    </div>
  );
};

export default SocialsSet;
