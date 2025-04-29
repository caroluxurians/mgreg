import classNames from "classnames";
import Image from "next/image";

type TimelineEventProps = {
  eventName: string
  eventDescription?: string
  imageSrc?: string
  alt?: string
  styles?: string
};

const TimelineEvent = ({ eventName, eventDescription = "", imageSrc = "", alt = "", styles = "" }: TimelineEventProps) => {
  return (
    <div className={classNames(`flex flex-col gap-2 2xl:gap-5 ${styles}`)}>
      <div className="font-heading text-2xl w-56 sm:text-3xl sm:w-70 lg:text-4xl lg:w-84 xl:text-5xl xl:w-106 2xl:text-6xl 2xl:w-122 3xl:w-140">
        {eventName}
      </div>
      <div className="relative w-50 h-30">
        <Image src={imageSrc} fill alt={alt} className="object-cover rounded-lg" />
      </div>

      <div className="paragraph-font-size sm:w-95 md:w-78 lg:w-88 xl:w-106 2xl:w-122 3xl:w-144">
        {eventDescription}
      </div>
    </div>
  );
};

export default TimelineEvent;
