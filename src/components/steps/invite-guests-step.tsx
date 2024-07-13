import { UserRoundPlusIcon } from "lucide-react";

interface InviteGuestsStepProps {
  emailsToInvite: string[];
  openGuestsModal: () => void;
  openConfirmEventModal: () => void;
}

export default function InviteGuestsStep({
  emailsToInvite,
  openGuestsModal,
  openConfirmEventModal,
}: InviteGuestsStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2" onClick={openGuestsModal}>
        <UserRoundPlusIcon className="size-5 text-zinc-400" />
        <span
          className={`flex-1 text-lg text-zinc-400 ${emailsToInvite.length > 0 && "text-left"}`}
        >
          {emailsToInvite.length === 0
            ? "Who's coming with you?"
            : `${emailsToInvite.length} invited person(s).`}
        </span>
      </div>

      <button
        onClick={openConfirmEventModal}
        className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
      >
        <span>Confirm Event</span>
      </button>
    </div>
  );
}
