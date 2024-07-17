import { AtSignIcon, UserIcon } from "lucide-react";
import { FormEvent } from "react";
import Button from "../shared/button";
import Modal from "../shared/modal";

interface ConfirmEventModalProps {
  closeConfirmEventModal: () => void;
  createEvent: (e: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
}

export default function ConfirmEventModal({
  closeConfirmEventModal,
  createEvent,
  setOwnerName,
  setOwnerEmail,
}: ConfirmEventModalProps) {
  return (
    <Modal
      isOpen
      onClose={closeConfirmEventModal}
      title="Confirm event"
      subtitle="To confirm the creation of the Trip event from August 14 to 16, 2024, fill in your details below."
      size="big"
    >
      <form onSubmit={createEvent} className="space-y-3">
        <div className="flex h-14 items-center justify-between gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-2.5">
          <UserIcon className="size-5 text-zinc-400" />
          <input
            type="text"
            name="user"
            placeholder="Your name"
            className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>

        <div className="flex h-14 items-center justify-between gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-2.5">
          <AtSignIcon className="size-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
            onChange={(e) => setOwnerEmail(e.target.value)}
          />
        </div>

        <Button type="submit" size="full">
          <span>Confirm</span>
        </Button>
      </form>
    </Modal>
  );
}
