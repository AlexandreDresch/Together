import {
  MapPinIcon,
  Calendar,
  ArrowRightIcon,
  UserRoundPlusIcon,
  Settings2Icon,
  X,
  AtSignIcon,
  PlusIcon,
} from "lucide-react";
import { FormEvent, useState } from "react";

function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
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

  return (
    <div className="bg-pattern flex h-screen items-center justify-center bg-center bg-no-repeat">
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
          <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4">
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
            <div className="shadow-shape flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4">
              <div
                className="flex flex-1 items-center gap-2"
                onClick={openGuestsModal}
              >
                <UserRoundPlusIcon className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Who's coming with you?"
                  className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
                />
              </div>

              <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400">
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
          <div className="fixed inset-0 flex items-center justify-center bg-black/60">
            <div className="shadow-shape w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
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
                  Guests will receive emails to confirm their participation in
                  the event.
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

              <div className="bg-z h-px w-full" />

              <form
                onSubmit={addNewEmailToInvite}
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
        )}
      </div>
    </div>
  );
}

export default App;
