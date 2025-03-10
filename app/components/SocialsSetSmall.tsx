import Image from "next/image";

const SocialsSetSmall = ({ color, classNames = "" }: { color: string, classNames?: string }) => {
  return (
    <div className={`${classNames} gap-[30px]`}>
      <Image src={`/instagram-${color}.svg`} height={18.9} width={18.9} alt="instagram icon" />
      <Image src={`/x-${color}.svg`} height={19.2} width={20.7} alt="x icon" />
      <Image src={`/youtube-${color}.svg`} height={19.244} width={27.48} alt="youtube icon" />
      <Image src={`/facebook-${color}.svg`} height={18.9} width={8.1} alt="facebook icon" />
    </div>
  );
};

export default SocialsSetSmall;
