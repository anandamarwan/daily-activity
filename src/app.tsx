import { ActivityItem } from "./components/ui/activity-item";
import { dataActivities } from "./data/activities";

export function App() {
  return (
    <div className="m-10 flex justify-center">
      <main className="w-full max-w-3x1 space-y-4">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          My Activitity
        </h1>
        <hr />

        <section>
          <h2 className="text-2xl font-bold">Today</h2>

          <div>
            <ul className="flex flex-col divide-y-4 divide-solid">
              {dataActivities.map((activity) => {
                return (
                  <li key={activity.id}>
                    <ActivityItem activity={activity} />
                    {/* <p>{activity.description}</p>
                    <p>
                      {activity.date.getDate()}-{activity.date.getMonth()}-
                      {activity.date.getFullYear()}
                    </p> */}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
