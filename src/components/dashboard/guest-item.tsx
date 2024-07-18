import { CheckCircleIcon, CircleDashedIcon, GhostIcon } from "lucide-react";
import { Guest } from "../../types";

export default function GuestItem({ email, is_confirmed, name }: Guest) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-1.5">
        {name ? (
          <span className="block text-zinc-100">{name}</span>
        ) : (
          <span className="block text-zinc-100">
            <GhostIcon className="mr-1 size-3 text-zinc-400" /> Ghost Guest
          </span>
        )}
        <span className="block truncate text-xs text-zinc-400">{email}</span>
      </div>

      {is_confirmed ? (
        <CheckCircleIcon className="size-5 shrink-0 text-zinc-400" />
      ) : (
        <CircleDashedIcon className="size-5 shrink-0 text-zinc-400" />
      )}
    </div>
  );
}
