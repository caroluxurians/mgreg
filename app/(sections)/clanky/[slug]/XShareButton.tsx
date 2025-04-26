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
      className="flex"
      aria-label="Share on X"
    >
      <div>Share on</div>
      <Image src="/x-light.svg" width={20} height={20} alt="share on X button" />
    </a>
  );
};

export default XShareButton;
