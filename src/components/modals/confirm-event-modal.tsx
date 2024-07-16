import { AtSignIcon, UserIcon } from "lucide-react";
import { FormEvent } from "react";
import Button from "../shared/button";
import Modal from "../shared/modal";

interface ConfirmEventModalProps {
  closeConfirmEventModal: () => void;
  createEvent: (e: FormEvent<HTMLFormElement>) => void;
}

export default function ConfirmEventModal({
  closeConfirmEventModal,
  createEvent,
}: ConfirmEventModalProps) {
  return (
    <Modal
      isOpen
      onClose={closeConfirmEventModal}
      title="Confirm event"
      subtitle="To confirm the creation of the Trip event from August 14 to 16, 2024, fill in your details below."
      size="big"
    >
      <form onSubmit={createEvent} className="space-y-3">
        <div className="flex h-14 items-center justify-between gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-2.5">
          <UserIcon className="size-5 text-zinc-400" />
          <input
            type="text"
            name="user"
            placeholder="Your name"
            className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
          />
        </div>

        <div className="flex h-14 items-center justify-between gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-2.5">
          <AtSignIcon className="size-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
          />
        </div>

        <Button type="submit" size="full">
          <span>Confirm</span>
        </Button>
      </form>
    </Modal>
    // <div className="fixed inset-0 flex items-center justify-center bg-black/60">
    //   <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
    //     <div className="space-y-2">
    //       <div className="flex items-center justify-between">
    //         <h2 className="text-lg font-semibold">Confirm event</h2>

    //         <button
    //           type="button"
    //           className="text-zinc-400 hover:text-zinc-300"
    //           onClick={closeConfirmEventModal}
    //         >
    //           <X className="size-5" />
    //         </button>
    //       </div>

    //       <p className="text-left text-sm text-zinc-400">
    //         To confirm the creation of the{" "}
    //         <span className="font-semibold text-zinc-100">Trip</span> event from{" "}
    //         <span className="font-semibold text-zinc-100">
    //           August 14 to 16, 2024
    //         </span>
    //         , fill in your details below.
    //       </p>
    //     </div>

    //     <form onSubmit={createEvent} className="space-y-3">
    //       <div className="flex h-14 items-center justify-between gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-2.5">
    //         <UserIcon className="size-5 text-zinc-400" />
    //         <input
    //           type="text"
    //           name="user"
    //           placeholder="Your name"
    //           className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
    //         />
    //       </div>

    //       <div className="flex h-14 items-center justify-between gap-2 rounded-lg border-zinc-800 bg-zinc-950 px-2.5">
    //         <AtSignIcon className="size-5 text-zinc-400" />
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="example@example.com"
    //           className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
    //         />
    //       </div>

    //       <Button type="submit" size="full">
    //         <span>Confirm</span>
    //       </Button>
    //     </form>
    //   </div>
    // </div>
  );
}
