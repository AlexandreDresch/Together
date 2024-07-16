import { CalendarIcon, TagIcon } from "lucide-react";
import Button from "../shared/button";
import Modal from "../shared/modal";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export default function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <Modal
      isOpen
      onClose={closeCreateActivityModal}
      title="Add Activity"
      subtitle="All the guests will be able to see the new activity."
      size="big"
    >
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
    </Modal>
  );
}
