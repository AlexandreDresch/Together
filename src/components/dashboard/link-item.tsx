import { Link2Icon } from "lucide-react";

export interface Link {
  name: string;
  link: string;
}

export default function LinkItem({ name, link }: Link) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-1.5">
        <span className="block text-zinc-100">{name}</span>
        <a
          className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
          href={link}
        >
          {link}
        </a>
      </div>

      <Link2Icon className="size-5 shrink-0 text-zinc-400" />
    </div>
  );
}
