import { activities } from "./data/activities";

export function App() {
  // console.log(activities);

  return (
    <div className="m-10 flex justify-center">
      <main className="w-full max-w-3x1 space-y-4">
        <h1 className="text-4xl font-bold">My Activity</h1>
        <hr />

        <section>
          <h2 className="text-2xl">My Daily Activity</h2>

          <div>
            <ul>
              {activities.map((activity) => {
                return (
                  <li className="space-y-1">
                    <p>{activity.title}</p>
                    <p>{activity.description}</p>
                    <p>
                      {activity.date.getDate()}-{activity.date.getMonth()}-
                      {activity.date.getFullYear()}
                    </p>
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
