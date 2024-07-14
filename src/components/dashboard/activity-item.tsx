import { CircleCheckIcon } from "lucide-react";
import { formatDate, formatDay, isPastDate } from "../../utils";

export interface Activity {
  date: Date;
  activities: { name: string; time: string }[];
}

export default function ActivityItem({ date, activities }: Activity) {
  const isPast = isPastDate(date);

  return (
    <div className="space-y-2.5">
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-semibold text-zinc-300">
          {formatDate(date)}
        </span>
        <span className="text-xs text-zinc-500">{formatDay(date)}</span>
      </div>

      {activities.length === 0 ? (
        <p className="text-sm text-zinc-500">
          No activities registered this day.
        </p>
      ) : (
        <div className="space-y-2.5">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape"
            >
              <CircleCheckIcon
                className={`size-5 ${isPast ? "text-zinc-400" : "text-lime-300"}`}
              />
              <span className="text-zinc-100">{activity.name}</span>
              <span className="ml-auto text-sm text-zinc-400">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
