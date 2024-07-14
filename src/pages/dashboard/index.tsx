import { useState } from "react";

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

export default function DashboardPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
        <div className="flex items-center gap-2">
          <MapPinIcon className="size-5 text-zinc-400" />

          <span className="text-lg text-zinc-100">Antarctica</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <CalendarIcon className="size-5 text-zinc-400" />

            <span className="text-zinc-100">28 to 30, August</span>
          </div>

          <div className="h-6 w-px bg-zinc-800" />

          <button className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700">
            <span>Change location/date</span>
            <Settings2Icon className="size-5" />
          </button>
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

          <ActivitiesContainer
            activities={[
              {
                date: new Date("2024-06-28"),
                activities: [
                  { name: "Team Meeting", time: "10:00" },
                  { name: "Project Planning", time: "14:00" },
                  { name: "Code Review", time: "16:00" },
                ],
              },
              {
                date: new Date("2024-06-29"),
                activities: [
                  { name: "Client Presentation", time: "09:30" },
                  { name: "Lunch with Team", time: "12:00" },
                  { name: "Development Sprint", time: "15:00" },
                ],
              },
              {
                date: new Date("2024-06-30"),
                activities: [
                  { name: "Design Workshop", time: "11:00" },
                  { name: "Marketing Strategy", time: "13:30" },
                  { name: "Product Demo", time: "17:00" },
                ],
              },
            ]}
          />
        </section>

        <section className="w-80 space-y-6">
          <LinksContainer
            links={[
              { name: "AirBnB", link: "www.link.com" },
              { name: "Other", link: "www.other.com" },
            ]}
          />

          <div className="h-px w-full bg-zinc-800" />

          <GuestsContainer
            guests={[
              { name: "John", email: "john@email.com", isConfirmed: false },
              { name: "Anna", email: "anna@email.com", isConfirmed: true },
            ]}
          />
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
