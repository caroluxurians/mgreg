import classNames from "classnames";

const TimelineEvent = ({ eventName, eventDescription, styles = "" }: { eventName: string, eventDescription: string, styles?: string }) => {
  return (
    <div className={classNames(`flex flex-col gap-2 ${styles}`)}>
      <div className="font-heading text-[23px]/[25px] sm:text-[28px]/[30px] sm:w-70 md:text-[32px]/[36px] lg:text-[36px]/[42px]">
        {eventName}
      </div>
      <div className="paragraph-font-size sm:w-95 md:w-78 lg:w-86">
        {eventDescription}
      </div>
    </div>
  );
};

export default TimelineEvent;
