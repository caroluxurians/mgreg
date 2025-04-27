import Image from "next/image";

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
      className="flex gap-2 text-white bg-medium-pink hover:text-medium-pink hover:bg-light-pink text-sm md:text-base lg:text-lg font-semibold italic rounded-full px-4 py-1"
      aria-label="Share on X"
    >
      <div>sdílet na</div>
      <Image src="/x-light.svg" width={20} height={20} alt="share on X button" />
    </a>
  );
};

export default XShareButton;
