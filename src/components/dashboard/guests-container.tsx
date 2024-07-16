import { UserCogIcon } from "lucide-react";
import GuestItem, { Guest } from "./guest-item";
import Button from "../shared/button";

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

      <Button size="full" variant="secondary">
        <UserCogIcon className="size-5" />
        <span>Manage Guests</span>
      </Button>
    </div>
  );
}
