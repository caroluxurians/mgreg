const TimelineEvent = ({ eventName, eventDescription }: { eventName: string, eventDescription: string }) => {
  return (
    <div>
      <div className="font-heading text-[23px]">
        {eventName}
      </div>
      <div className="text-[14px]">
        {eventDescription}
      </div>
    </div>
  );
};

export default TimelineEvent;
