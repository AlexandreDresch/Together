import { CalendarIcon, TagIcon, X } from "lucide-react";
import Button from "../shared/button";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export default function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Add Activity</h2>

            <button
              type="button"
              className="text-zinc-400 hover:text-zinc-300"
              onClick={closeCreateActivityModal}
            >
              <X className="size-5" />
            </button>
          </div>

          <p className="text-left text-sm text-zinc-400">
            All the guests will be able to see the new activity.
          </p>
        </div>

        <form className="space-y-3">
          <div className="flex h-14 items-center justify-between gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-2.5">
            <TagIcon className="size-5 text-zinc-400" />
            <input
              type="text"
              name="title"
              placeholder="What will you do?"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-14 flex-1 items-center justify-between gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-2.5">
              <CalendarIcon className="size-5 text-zinc-400" />
              <input
                type="datetime-local"
                name="occurs_at"
                placeholder="Date/Time"
                className="flex-1 bg-transparent text-lg outline-none [color-scheme:dark] placeholder:text-zinc-400"
              />
            </div>
          </div>

          <Button type="submit" size="full">
            <span>Add Activity</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
