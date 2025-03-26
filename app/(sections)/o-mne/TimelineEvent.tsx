const TimelineEvent = ({ eventName, eventDescription }: { eventName: string, eventDescription: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-heading text-[23px]/[25px]">
        {eventName}
      </div>
      <div className="text-[14px]/[23px]">
        {eventDescription}
      </div>
    </div>
  );
};

export default TimelineEvent;
