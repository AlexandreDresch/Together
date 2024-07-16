import {
  ArrowRightIcon,
  Calendar,
  MapPinIcon,
  Settings2Icon,
} from "lucide-react";
import Button from "../shared/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Modal from "../shared/modal";

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
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedDays, setSelectedDays] = useState<DateRange | undefined>();

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

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

      <button
        className="flex items-center gap-2 text-left text-zinc-400"
        disabled={isGuestsInputOpen}
        onClick={openDatePicker}
      >
        <Calendar className="size-5" />
        <span>When?</span>
      </button>

      <Modal
        isOpen={isDatePickerOpen}
        onClose={closeDatePicker}
        title="Select the date"
      >
        <DayPicker
          mode="range"
          selected={selectedDays}
          onSelect={setSelectedDays}
          
        />
      </Modal>

      <div className="h-6 w-px bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          <span>Change location/date</span>
          <Settings2Icon className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          <span>Continue</span>
          <ArrowRightIcon className="size-5" />
        </Button>
      )}
    </div>
  );
}
