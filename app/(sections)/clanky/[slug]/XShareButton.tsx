import TwitterIcon from "@/app/components/svg/TwitterIcon";

type XShareButtonProps = {
  url: string
  text?: string
};

const XShareButton = ({ url, text = "" }: XShareButtonProps) => {
  const params = new URLSearchParams({
    url,
    text,
  });
  const shareUrl = `https://twitter.com/intent/tweet?${params.toString()}`;

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center gap-2 text-white bg-medium-pink hover:text-medium-pink hover:bg-light-pink text-sm md:text-base lg:text-lg 2xl:text-xl font-semibold italic rounded-full w-28 h-8 md:w-30 md:h-9 lg:w-36 lg:h-10.5 2xl:h-12 2xl:w-40"
      aria-label="Share on X"
    >
      <div>sdílet na</div>
      <TwitterIcon className="w-4.5 lg:w-5" />
    </a>
  );
};

export default XShareButton;
