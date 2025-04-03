import classNames from "classnames";

const TimelineEvent = ({ eventName, eventDescription, styles = "" }: { eventName: string, eventDescription: string, styles?: string }) => {
  return (
    <div className={classNames(`flex flex-col gap-2 ${styles}`)}>
      <div className="font-heading text-[23px]/[25px] sm:text-[29px]/[30px] sm:w-70 md:text-[32px]/[36px] lg:text-[38px]/[39px] lg:w-84 xl:text-[48px]/[49px] xl:w-106">
        {eventName}
      </div>
      <div className="paragraph-font-size sm:w-95 md:w-78 lg:w-88 xl:w-106">
        {eventDescription}
      </div>
    </div>
  );
};

export default TimelineEvent;
