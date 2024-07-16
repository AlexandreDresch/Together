import { UserRoundPlusIcon } from "lucide-react";
import Button from "../shared/button";

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
      <Button variant="tertiary" size="max" onClick={openGuestsModal}>
        <UserRoundPlusIcon className="size-5" />
        <span className="flex-1 text-left text-lg">
          {emailsToInvite.length === 0
            ? "Who's coming with you?"
            : `${emailsToInvite.length} invited person(s).`}
        </span>
      </Button>

      <Button onClick={openConfirmEventModal}>
        <span>Confirm Event</span>
      </Button>
    </div>
  );
}
