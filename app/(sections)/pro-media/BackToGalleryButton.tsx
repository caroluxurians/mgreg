import Link from "next/link";

const BackToGalleryButton = () => {
  return (
    <Link
      href="/pro-media#gallery"
      className="flex items-center justify-center text-white bg-medium-pink hover:text-medium-pink hover:bg-white transition-colors duration-100 rounded-full text-sm font-semibold italic text-center h-8 w-32 md:w-38 md:h-9 lg:w-44 lg:h-10.5 2xl:w-48 2xl:h-12 md:text-base lg:text-lg 2xl:text-xl"
    >
      zpět do galerie
    </Link>
  );
};

export default BackToGalleryButton;
