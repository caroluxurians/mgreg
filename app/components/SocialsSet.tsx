import FacebookIcon from "./svg/FacebookIcon";
import InstagramIcon from "./svg/InstagramIcon";
import TwitterIcon from "./svg/TwitterIcon";
import YoutubeIcon from "./svg/YoutubeIcon";

const SocialsSet = ({ color = "dark", classNames = "" }: { color?: string, classNames?: string }) => {
  const classNameDark = "text-medium-pink hover:text-header-hover-pink transition-colors duration-100";
  const classNameLight = "text-white hover:text-header-hover-pink transition-colors duration-100";

  return (
    <div className={`${classNames} gap-[30px]`}>
      {color === "dark"
        ? (
          <>
            <InstagramIcon className={classNameDark} />
            <TwitterIcon className={classNameDark} />
            <YoutubeIcon className={classNameDark} />
            <FacebookIcon className={classNameDark} />

          </>
        )
        : (
          <>
            <InstagramIcon className={classNameLight} />
            <TwitterIcon className={classNameLight} />
            <YoutubeIcon className={classNameLight} />
            <FacebookIcon className={classNameLight} />
          </>
        )}

    </div>
  );
};

export default SocialsSet;

/*  <Image src="/facebook-dark.svg" height={21} width={9} alt="facebook icon" />
<Image src="/instagram-dark.svg" height={21} width={21} alt="instagram icon" className="" />
 <Image src="/x-dark.svg" height={21.34} width={23} alt="x icon" />
 <Image src="/youtube-dark.svg" height={21.38} width={30.54} alt="youtube icon" />
 */
