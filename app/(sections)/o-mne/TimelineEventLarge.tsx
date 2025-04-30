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
    <div className={classNames(`flex flex-col gap-2 md:flex-row md:gap-6 2xl:gap-5 ${styles}`)}>
      <div className="font-heading text-2xl leading-[1.2] w-56 sm:text-3xl sm:w-70 lg:text-4xl lg:w-84 xl:text-5xl xl:w-106 2xl:text-6xl 2xl:w-122 3xl:w-140">
        {eventName}
      </div>
      <div className="relative w-30 h-16 md:w-54 md:h-34">
        <Image src={imageSrc} fill alt={alt} className="object-cover rounded-lg md:-rotate-4" />
      </div>
    </div>
  );
};

export default TimelineEventLarge;
