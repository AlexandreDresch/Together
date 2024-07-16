import { X } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

const modalVariants = tv({
  base: "space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape",
  variants: {
    size: {
      auto: "size-auto",
      big: "w-[640px]",
    },
  },
  defaultVariants: { size: "auto" },
});

interface ModalProps extends VariantProps<typeof modalVariants> {
  title: string;
  subtitle?: string;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({
  children,
  isOpen = true,
  onClose,
  size,
  title,
  subtitle,
}: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className={modalVariants({ size })}>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{title}</h2>

                <button
                  type="button"
                  className="text-zinc-400 hover:text-zinc-300"
                  onClick={onClose}
                >
                  <X className="size-5" />
                </button>
              </div>

              {subtitle && (
                <p className="text-left text-sm text-zinc-400">{subtitle}</p>
              )}

              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
