import classNames from "classnames";

const TimelineEvent = ({ eventName, eventDescription = "", styles = "" }: { eventName: string, eventDescription?: string, styles?: string }) => {
  return (
    <div className={classNames(`flex flex-col gap-2 2xl:gap-5 ${styles}`)}>
      <div className="font-heading text-[23px]/[25px] sm:text-[29px]/[30px] sm:w-70 md:text-[32px]/[36px] lg:text-[38px]/[39px] lg:w-84 xl:text-[48px]/[49px] xl:w-106 2xl:text-[56px]/[57px] 2xl:w-122 3xl:text-[64px]/[66px] 3xl:w-140">
        {eventName}
      </div>
      <div className="paragraph-font-size sm:w-95 md:w-78 lg:w-88 xl:w-106 2xl:w-122 3xl:w-144">
        {eventDescription}
      </div>
    </div>
  );
};

export default TimelineEvent;
