type FacebookShareButtonProps = {
  url: string
};

const FacebookShareButton = ({ url }: FacebookShareButtonProps) => {
  return (
    <a
      target="_blank"
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
      className="fb-xfbml-parse-ignore"
      rel="noreferrer"
    >
      Sdílet
    </a>
  );
};

export default FacebookShareButton;
