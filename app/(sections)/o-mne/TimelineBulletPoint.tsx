import Image from "next/image";

const TimelineBulletPoint = ({ shape }: { shape: string }) => {
  return (
    <div className="flex items-center h-20">
      <div className="flex items-center gap-3">
        <div className="font-heading text-[30px]">
          2012
        </div>
        <div className="w-2.5">
          {shape === "ellipse"
            ? <Image src="/ellipse-timeline.svg" height={25.598} width={20} alt="ellipse bullet point on timeline" />
            : <div className="w-2.5 h-2.5 rounded-full bg-medium-pink" />
          }

        </div>
      </div>
      <div className="w-8 h-1 bg-red-pink">
      </div>
    </div>
  );
};

export default TimelineBulletPoint;
