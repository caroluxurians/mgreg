import classNames from "classnames";

const TimelineEvent = ({ eventName, eventDescription, styles = "" }: { eventName: string, eventDescription: string, styles?: string }) => {
  return (
    <div className={classNames(`flex flex-col gap-2 ${styles}`)}>
      <div className="font-heading text-[23px]/[25px] sm:text-[28px]/[30px] sm:w-70">
        {eventName}
      </div>
      <div className="text-[14px]/[23px] sm:text-[16px]/[24px] sm:w-95">
        {eventDescription}
      </div>
    </div>
  );
};

export default TimelineEvent;
