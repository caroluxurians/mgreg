import Link from "next/link";
import InstagramIcon from "./svg/InstagramIcon";
import TwitterIcon from "./svg/TwitterIcon";
import YoutubeIcon from "./svg/YoutubeIcon";
import BlueskyIcon from "./svg/BlueskyIcon";

const SocialsSet = ({ color = "dark", classNames = "" }: { color?: string, classNames?: string }) => {
  const classNameDark = "text-medium-pink hover:text-header-hover-pink transition-colors duration-100";
  const classNameLight = "text-white hover:text-header-hover-pink transition-colors duration-100";

  const instagramLink = "https://www.instagram.com/ruzovarebelka/";
  const twitterLink = "https://x.com/marketkag";
  const youtubeLink = "https://www.youtube.com/channel/UCcf12G_5igxOSZBFSt4eEAQ";
  const blueskyLink = "https://bsky.app/profile/marketkag.bsky.social";

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
            <Link href={blueskyLink} target="_blank">
              <BlueskyIcon className={classNameDark} />
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
            <Link href={blueskyLink} target="_blank">
              <BlueskyIcon className={classNameLight} />
            </Link>
          </>
        )}
    </div>
  );
};

export default SocialsSet;
