import { FormEvent, useState } from "react";

import { useNavigate } from "react-router-dom";

import InviteGuestsModal from "../../components/modals/invite-guests-modal";
import ConfirmEventModal from "../../components/modals/confirm-event-modal";
import DestinationAndDateStep from "../../components/steps/destination-and-date-step";
import InviteGuestsStep from "../../components/steps/invite-guests-step";

export default function CreateEventPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmEventModalOpen, setIsConfirmEventModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function addNewEmailToInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email")?.toString();
    if (!email) return;

    if (emailsToInvite.includes(email)) return;

    setEmailsToInvite([...emailsToInvite, email]);

    e.currentTarget.reset();
  }

  function removeEmailFromInvite(email: string) {
    setEmailsToInvite(emailsToInvite.filter((e) => e !== email));
  }

  function openConfirmEventModal() {
    setIsConfirmEventModalOpen(true);
  }

  function closeConfirmEventModal() {
    setIsConfirmEventModalOpen(false);
  }

  function createEvent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/dashboard/123");
  }

  return (
    <div className="flex h-screen items-center justify-center bg-pattern bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-1">
            <img src="/logo.svg" alt="Together - Logo" />
            <h1 className="text-2xl font-bold">Together</h1>
          </div>

          <p className="text-lg text-zinc-300">
            Invite someone, do something...
          </p>
        </div>

        <section className="space-y-4">
          <DestinationAndDateStep
            closeGuestsInput={closeGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestsInput={openGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              openConfirmEventModal={openConfirmEventModal}
              openGuestsModal={openGuestsModal}
            />
          )}
        </section>

        <p className="text-sm text-zinc-500">
          By using our app to plan your events you will automatically be
          agreeing <br /> to our{" "}
          <a href="" className="text-zinc-300 underline">
            terms of use
          </a>{" "}
          and{" "}
          <a href="" className="text-zinc-300 underline">
            privacy policies
          </a>
          .
        </p>

        {isGuestsModalOpen && (
          <InviteGuestsModal
            addEmailToInvite={addNewEmailToInvite}
            closeGuestsModal={closeGuestsModal}
            emailsToInvite={emailsToInvite}
            removeEmailFromInvite={removeEmailFromInvite}
          />
        )}

        {isConfirmEventModalOpen && (
          <ConfirmEventModal
            closeConfirmEventModal={closeConfirmEventModal}
            createEvent={createEvent}
          />
        )}
      </div>
    </div>
  );
}
