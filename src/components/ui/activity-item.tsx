import { type Activity } from "../../data/activities";

export function ActivityItem({ activity }: { activity: Activity }) {
  return (
    <div>
      <p>{activity.title}</p>
    </div>
  );
}
