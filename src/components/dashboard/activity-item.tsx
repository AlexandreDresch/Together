import { CircleCheckIcon } from "lucide-react";
import { formatDate, formatDay, isPastDate } from "../../utils";
import { Activity } from "../../types";
import { format } from "date-fns";

export default function ActivityItem({ occurs_at, title }: Activity) {
  const isPast = isPastDate(new Date(occurs_at));

  return (
    <div className="space-y-2.5">
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-semibold text-zinc-300">
          {formatDate(new Date(occurs_at))}
        </span>
        <span className="text-xs text-zinc-500">
          {formatDay(new Date(occurs_at))}
        </span>
      </div>
      <div className="space-y-2.5">
        <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
          <CircleCheckIcon
            className={`size-5 ${isPast ? "text-zinc-400" : "text-lime-300"}`}
          />
          <span className="text-zinc-100">{title}</span>
          <span className="ml-auto text-sm text-zinc-400">
            {format(occurs_at, "HH:mm")}h
          </span>
        </div>
      </div>
    </div>
  );
}
