import { ActivityItem } from "./components/ui/activity-item";
import { dataActivities } from "./data/activities";

export function App() {
  return (
    <div className="m-10 flex justify-center">
      <main className="w-full max-w-3x1 space-y-4">
        <section>
          <h2 className="text-2xl font-bold">Today</h2>

          <div className="bg-gray-100 p-4 rounded-lg">
            <form method="post" className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label htmlFor="title">Title: </label>
                <input
                  type="text"
                  required
                  className="p-2 border border-solid border-red-600 rounded-lg"
                  placeholder="Activity name"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="category">Category: </label>
                <input
                  type="category"
                  placeholder="Category title"
                  required
                  className="p-2 border border-solid border-red-600 rounded-lg"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="p-2 bg-red-500 hover:bg-red-700 text-white rounded-full "
                >
                  Add New Activity
                </button>
              </div>
            </form>
          </div>

          <div>
            <ul className="flex flex-col divide-y-4 divide-solid">
              {dataActivities.map((activity) => {
                return (
                  <li key={activity.id}>
                    <ActivityItem activity={activity} />
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
