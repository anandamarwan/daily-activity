import { activities } from "./data/activities";

export function App() {
  // console.log(activities);

  return (
    <div>
      <h1 className="text-4xl">Daily Activity</h1>
      {activities.map((activity) => {
        return (
          <div>
            <h2>{activity.title}</h2>
            <p>{activity.description}</p>
            <p>
              {activity.date.getDate()}-{activity.date.getMonth()}-
              {activity.date.getFullYear()}
            </p>
          </div>
        );
      })}
    </div>
  );
}
