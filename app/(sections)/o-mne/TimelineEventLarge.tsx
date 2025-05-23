import classNames from "classnames";
import Image from "next/image";

type TimelineEventProps = {
  eventName: string
  imageSrc?: string
  alt?: string
  styles?: string
};

const TimelineEventLarge = ({ eventName, imageSrc = "", alt = "", styles = "" }: TimelineEventProps) => {
  return (
    <div className={classNames(`flex flex-col gap-2 md:flex-row md:gap-6 lg:gap-12 xl:gap-18 2xl:gap-20 ${styles}`)}>
      <div className="font-heading text-2xl leading-[1.2] w-56 sm:text-3xl sm:w-70 lg:text-4xl lg:w-86 xl:text-5xl xl:leading-[1.1] xl:w-110 2xl:text-6xl 2xl:w-140">
        {eventName}
      </div>
      <div className="relative w-30 h-16 md:w-54 md:h-34 lg:w-70 lg:h-42 xl:w-80 xl:h-48 2xl:w-84 2xl:h-52">
        <Image src={imageSrc} fill alt={alt} className="object-cover rounded-xl md:rounded-2xl md:-rotate-4" />
      </div>
    </div>
  );
};

export default TimelineEventLarge;
