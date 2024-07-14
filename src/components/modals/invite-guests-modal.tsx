import { AtSignIcon, PlusIcon, X } from "lucide-react";
import { FormEvent } from "react";

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
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Select guests</h2>

            <button
              type="button"
              className="text-zinc-400 hover:text-zinc-300"
              onClick={closeGuestsModal}
            >
              <X className="size-5" />
            </button>
          </div>

          <p className="text-left text-sm text-zinc-400">
            Guests will receive emails to confirm their participation in the
            event.
          </p>
        </div>

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

        <div className="bg-zinc-800 h-px w-full" />

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

          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
          >
            <span>Add</span>
            <PlusIcon className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
