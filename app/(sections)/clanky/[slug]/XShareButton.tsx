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
      className="inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600"
      aria-label="Share on X"
    >
      <svg width="20" height="20" fill="currentColor" aria-hidden="true">
        <use xlinkHref="#icon-x" />
      </svg>
      Share on X
    </a>
  );
};

export default XShareButton;
