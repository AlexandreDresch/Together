import {
  MapPinIcon,
  Calendar,
  ArrowRightIcon,
  UserRoundPlusIcon,
  Settings2Icon,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteGuestsModal from "../../components/invite-guests-modal";
import ConfirmEventModal from "../../components/confirm-event-modal";

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

  function createEvent() {
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
          <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
            <div className="flex flex-1 items-center gap-2">
              <MapPinIcon className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="What will you do?"
                className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="When?"
                className="w-40 bg-transparent text-lg outline-none placeholder:text-zinc-400"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className="h-6 w-px bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700"
              >
                <span>Change location/date</span>
                <Settings2Icon className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
              >
                <span>Continue</span>
                <ArrowRightIcon className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
              <div
                className="flex flex-1 items-center gap-2"
                onClick={openGuestsModal}
              >
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
