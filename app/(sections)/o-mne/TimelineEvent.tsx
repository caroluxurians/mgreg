import classNames from "classnames";
import Image from "next/image";

type TimelineEventProps = {
  eventName: string
  imageSrc?: string
  alt?: string
  styles?: string
  rotate?: string
};

const TimelineEvent = ({ eventName, imageSrc = "", alt = "", styles = "", rotate = "" }: TimelineEventProps) => {
  return (
    <div className={classNames(`flex flex-col gap-2 md:flex-row md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-14 ${styles}`)}>
      <div
        className="font-heading text-2xl leading-[1.2] w-56
        sm:text-3xl sm:w-70 md:w-74
        lg:text-4xl lg:w-90
        xl:text-5xl xl:w-116 xl:leading-[1.1]
        2xl:text-6xl 2xl:w-146 2xl:leading-[1]"
      >
        {eventName}
      </div>
      <div className="relative w-50 h-30 sm:w-54 sm:h-34 lg:w-70 lg:h-42 xl:w-80 xl:h-48 2xl:w-84 2xl:h-52">
        <Image src={imageSrc} fill alt={alt} className={classNames(`object-cover rounded-xl md:rounded-2xl ${rotate}`)} />
      </div>

      {/*  <div className="paragraph-font-size sm:w-95
      md:w-78 lg:w-88 xl:w-106 2xl:w-122 3xl:w-144">
        {eventDescription}
      </div> */}
    </div>
  );
};

export default TimelineEvent;
