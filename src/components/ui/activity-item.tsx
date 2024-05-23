import { type Activity } from "../../data/activities";
import { getTimeString } from "../../utils/datetime";

export function ActivityItem({ activity }: { activity: Activity }) {
  const timeStart = getTimeString(activity.timeStart);
  const timeEnd = getTimeString(activity.timeEnd);

  return (
    <div className="flex justify-between p-2">
      <div className="">
        <p className="text-xl">{activity.title}</p>
        {timeStart && timeEnd && (
          <p className="text-red-600">
            {" "}
            ⏰<time dateTime={timeStart}>{timeStart}</time>
            <span>-</span>
            <time dateTime={timeEnd}>{timeEnd}</time>
          </p>
        )}
      </div>

      <div className="flex gap-2">
        {activity.isMust && <p>💪</p>}
        <p className="text-slate-600">{activity.description}</p>
      </div>
    </div>
  );
}
