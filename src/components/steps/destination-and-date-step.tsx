import {
  ArrowRightIcon,
  Calendar,
  MapPinIcon,
  Settings2Icon,
} from "lucide-react";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

export default function DestinationAndDateStep({
  closeGuestsInput,
  isGuestsInputOpen,
  openGuestsInput,
}: DestinationAndDateStepProps) {
  return (
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
  );
}
