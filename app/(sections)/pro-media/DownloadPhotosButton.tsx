import Link from "next/link";
import Download from "@/app/components/svg/Download";

const DownloadPhotosButton = ({ fileSize = "40 MB" }: { fileSize?: string }) => {
  return (
    <Link
      href="/pro-media#gallery"
      className="flex items-center justify-center text-white bg-medium-pink hover:text-medium-pink hover:bg-white transition-colors duration-100 rounded-full text-sm font-semibold italic text-center h-8 w-24 md:w-28 md:h-9 lg:w-32 lg:h-10.5 2xl:w-36 2xl:h-12 md:text-base lg:text-lg 2xl:text-xl"
    >
      <Download className="w-5 h-5" />
      {`${fileSize}`}
    </Link>
  );
};

export default DownloadPhotosButton;
