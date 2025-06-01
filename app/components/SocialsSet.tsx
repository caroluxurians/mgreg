import Link from "next/link";
import FacebookIcon from "./svg/FacebookIcon";
import InstagramIcon from "./svg/InstagramIcon";
import TwitterIcon from "./svg/TwitterIcon";
import YoutubeIcon from "./svg/YoutubeIcon";

const SocialsSet = ({ color = "dark", classNames = "" }: { color?: string, classNames?: string }) => {
  const classNameDark = "text-medium-pink hover:text-header-hover-pink transition-colors duration-100";
  const classNameLight = "text-white hover:text-header-hover-pink transition-colors duration-100";

  const instagramLink = "https://www.instagram.com/ruzovarebelka/";
  const twitterLink = "https://x.com/marketkag";
  const youtubeLink = "https://www.youtube.com/channel/UCcf12G_5igxOSZBFSt4eEAQ";
  const facebookLink = "https://www.facebook.com/gregorova.marketka";

  return (
    <div className={`${classNames} gap-[30px] items-center`}>
      {color === "dark"
        ? (
          <>
            <Link href={instagramLink} target="_blank">
              <InstagramIcon className={classNameDark} />
            </Link>
            <Link href={twitterLink} target="_blank">
              <TwitterIcon className={classNameDark} />
            </Link>
            <Link href={youtubeLink} target="_blank">
              <YoutubeIcon className={classNameDark} />
            </Link>
            <Link href={facebookLink} target="_blank">
              <FacebookIcon className={classNameDark} />
            </Link>
          </>
        )
        : (
          <>
            <Link href={instagramLink} target="_blank">
              <InstagramIcon className={classNameLight} />
            </Link>
            <Link href={twitterLink} target="_blank">
              <TwitterIcon className={classNameLight} />
            </Link>
            <Link href={youtubeLink} target="_blank">
              <YoutubeIcon className={classNameLight} />
            </Link>
            <Link href={facebookLink} target="_blank">
              <FacebookIcon className={classNameLight} />
            </Link>
          </>
        )}
    </div>
  );
};

export default SocialsSet;
