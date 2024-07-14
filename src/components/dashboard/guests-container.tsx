import { UserCogIcon } from "lucide-react";
import GuestItem, { Guest } from "./guest-item";

interface GuestsContainerProps {
  guests: Guest[];
}

export default function GuestsContainer({ guests }: GuestsContainerProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Guests</h2>

      <div className="space-y-5">
        {guests.map((guest, index) => (
          <GuestItem key={index} {...guest} />
        ))}
      </div>

      <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700">
        <UserCogIcon className="size-5" />
        <span>Manage Guests</span>
      </button>
    </div>
  );
}
