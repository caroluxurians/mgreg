import FacebookIcon from "@/app/components/svg/FacebookIcon";

type FacebookShareButtonProps = {
  url: string
};

const FacebookShareButton = ({ url }: FacebookShareButtonProps) => {
  return (
    <a
      target="_blank"
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
      className="fb-xfbml-parse-ignore flex justify-center items-center gap-2 text-white bg-medium-pink hover:text-medium-pink hover:bg-light-pink text-sm md:text-base lg:text-lg 2xl:text-xl font-semibold italic rounded-full w-28 h-8 md:w-30 md:h-9 lg:w-36 lg:h-10.5 2xl:h-12 2xl:w-40"
      rel="noreferrer"
    >
      sdílet na
      <FacebookIcon className="w-2 pb-0.5 lg:w-3" />
    </a>
  );
};

export default FacebookShareButton;
