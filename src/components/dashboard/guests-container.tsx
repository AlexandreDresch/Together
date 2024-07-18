import { UserCogIcon } from "lucide-react";
import GuestItem from "./guest-item";
import Button from "../shared/button";
import { useParams } from "react-router-dom";
import { Guest } from "../../types";
import { useEffect, useState } from "react";
import { getGuestsByEventId } from "../../services/events-api";

export default function GuestsContainer() {
  const { eventId } = useParams();
  const [guests, setGuests] = useState<Guest[]>([]);

  useEffect(() => {
    async function getGuestsData() {
      if (!eventId) return;
      const request = await getGuestsByEventId(eventId);

      if (request) {
        setGuests(request);
      }
    }

    getGuestsData();
  }, [eventId]);
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
