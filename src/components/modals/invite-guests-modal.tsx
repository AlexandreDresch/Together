import { AtSignIcon, PlusIcon, X } from "lucide-react";
import { FormEvent } from "react";
import Button from "../shared/button";
import Modal from "../shared/modal";

interface InviteGuestsModalProps {
  emailsToInvite: string[];
  closeGuestsModal: () => void;
  addEmailToInvite: (e: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvite: (email: string) => void;
}

export default function InviteGuestsModal({
  addEmailToInvite,
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvite,
}: InviteGuestsModalProps) {
  return (
    <Modal
      isOpen
      onClose={closeGuestsModal}
      title="Select guests"
      subtitle="Guests will receive emails to confirm their participation in the event."
      size="big"
    >
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5"
              >
                <span className="text-zinc-300">{email}</span>

                <button
                  type="button"
                  className="text-zinc-400 hover:text-zinc-300"
                  onClick={() => removeEmailFromInvite(email)}
                >
                  <X className="size-4" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="h-px w-full bg-zinc-800" />

        <form
          onSubmit={addEmailToInvite}
          className="flex items-center justify-between rounded-lg border-zinc-800 bg-zinc-950 p-2.5"
        >
          <div className="flex items-center gap-2">
            <AtSignIcon className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
            />
          </div>

          <Button type="submit">
            <span>Add</span>
            <PlusIcon className="size-5" />
          </Button>
        </form>
      </div>
    </Modal>
  );
}
