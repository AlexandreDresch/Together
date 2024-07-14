import { CheckCircleIcon, CircleDashedIcon } from "lucide-react";

export interface Guest {
  name: string;
  email: string;
  isConfirmed: boolean;
}

export default function GuestItem({ email, isConfirmed, name }: Guest) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-1.5">
        <span className="block text-zinc-100">{name}</span>
        <span className="block truncate text-xs text-zinc-400">{email}</span>
      </div>

      {isConfirmed ? (
        <CheckCircleIcon className="size-5 shrink-0 text-zinc-400" />
      ) : (
        <CircleDashedIcon className="size-5 shrink-0 text-zinc-400" />
      )}
    </div>
  );
}
