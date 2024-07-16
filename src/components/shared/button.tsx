import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center gap-2 rounded-lg font-medium",
  variants: {
    variant: {
      primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
      secondary: "bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
      tertiary: "bg-transparent text-zinc-400",
    },

    size: {
      default: "py-2 px-5",
      max: "flex-1 px-0",
      full: "w-full h-11 justify-center",
    },
  },
  defaultVariants: { variant: "primary", size: "default" },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function Button({
  children,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  );
}
