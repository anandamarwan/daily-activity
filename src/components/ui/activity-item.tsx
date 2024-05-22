import { type Activity } from "../../data/activities";

export function ActivityItem({ activity }: { activity: Activity }) {
  return (
    <div className="flex justify-between p-2">
      <p className="text-xl">{activity.title}</p>
      <div className="flex gap-2">
        {activity.isMust && <p>💪</p>}
        <p className="text-slate-600">{activity.description}</p>
      </div>
    </div>
  );
}
