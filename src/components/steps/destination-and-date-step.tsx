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
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string) => void;
  selectedDays: DateRange | undefined;
  setSelectedDays: (days: DateRange | undefined) => void;
}

export default function DestinationAndDateStep({
  closeGuestsInput,
  isGuestsInputOpen,
  openGuestsInput,
  setDestination,
  selectedDays,
  setSelectedDays,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  const displayedDate =
    selectedDays && selectedDays.from && selectedDays.to
      ? format(selectedDays.from, "'From 'd', 'LLL").concat(
          format(selectedDays.to, "' to 'd', 'LLL"),
        )
      : null;

  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPinIcon className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Where will you go?"
          className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
          disabled={isGuestsInputOpen}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <Button
        variant="tertiary"
        disabled={isGuestsInputOpen}
        onClick={openDatePicker}
      >
        <Calendar className="size-5" />
        <span>{displayedDate || "When?"}</span>
      </Button>

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
