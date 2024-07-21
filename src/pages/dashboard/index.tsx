import { useEffect, useState } from "react";

import {
  CalendarIcon,
  MapPinIcon,
  PlusIcon,
  Settings2Icon,
} from "lucide-react";

import CreateActivityModal from "../../components/modals/create-activity-modal";
import LinksContainer from "../../components/dashboard/links-container";
import GuestsContainer from "../../components/dashboard/guests-container";
import ActivitiesContainer from "../../components/dashboard/activities-container";
import Button from "../../components/shared/button";
import { useParams } from "react-router-dom";
import { getEventById } from "../../services/events-api";
import { Event } from "../../types";
import { format } from "date-fns";

export default function DashboardPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState<Event | undefined>();

  useEffect(() => {
    async function getEventData() {
      if (!eventId) return;
      const request = await getEventById(eventId);

      if (request) {
        setEvent(request);
      }
    }

    getEventData();
  }, [eventId]);

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  const displayedDate =
    event && event.startsAt && event.endsAt
      ? format(event.startsAt, "'From 'd', 'LLL").concat(
          format(event.endsAt, "' to 'd', 'LLL"),
        )
      : null;

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
        <div className="flex items-center gap-2">
          <MapPinIcon className="size-5 text-zinc-400" />

          <span className="text-lg text-zinc-100">{event?.destination}</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <CalendarIcon className="size-5 text-zinc-400" />

            <span className="text-zinc-100">{displayedDate}</span>
          </div>

          <div className="h-6 w-px bg-zinc-800" />

          <Button onClick={() => {}} variant="secondary">
            <span>Change location/date</span>
            <Settings2Icon className="size-5" />
          </Button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <section className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Timeline</h2>

            <button
              onClick={openCreateActivityModal}
              className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
            >
              <PlusIcon className="size-5" />
              <span>Add Activity</span>
            </button>
          </div>

          <ActivitiesContainer />
        </section>

        <section className="w-80 space-y-6">
          <LinksContainer
            links={[
              { name: "AirBnB", link: "www.link.com" },
              { name: "Other", link: "www.other.com" },
            ]}
          />

          <div className="h-px w-full bg-zinc-800" />

          <GuestsContainer />
        </section>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
