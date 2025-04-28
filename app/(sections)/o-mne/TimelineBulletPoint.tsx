import classNames from "classnames";
import Image from "next/image";

const TimelineBulletPoint = ({ shape, styles = "" }: { shape: string, styles?: string }) => {
  return (
    <div className={classNames(`flex items-center h-20 ${styles} relative`)}>
      <div className={classNames("flex gap-3 lg:gap-4 2xl:gap-7", shape === "ellipse" ? "items-baseline mb-2 sm:mb-2.5 md:mb-3.5 lg:mb-6.5 2xl:mb-10 3xl:mb-11" : "items-center")}>
        <div className="font-heading text-[30px] sm:text-[34px] md:text-[40px] lg:text-[56px] xl:text-[66px] 2xl:text-[88px] 3xl:text-[100px]">
          2012
        </div>
        <div className="w-2.5 z-2 xl:w-4 3xl:w-5">
          {shape === "ellipse"
            ? <Image src="/ellipse-timeline.svg" height={25.598} width={20} alt="ellipse bullet point on timeline" className="ml-0.5" />
            : <div className="w-2.5 h-2.5 rounded-full bg-medium-pink xl:w-4 xl:h-4 3xl:w-5 3xl:h-5" />}
        </div>
      </div>
      <div className="absolute left-14 z-0 w-8 h-1 bg-red-pink sm:w-10 sm:left-16 md:w-12 md:left-18 lg:w-14 lg:left-24 xl:left-28 2xl:w-16 2xl:left-38 3xl:w-19 3xl:left-43" />
    </div>
  );
};

export default TimelineBulletPoint;
