import { PlusIcon } from "lucide-react";
import LinkItem, { Link } from "./link-item";

interface LinksContainerProps {
  links: Link[];
}

export default function LinksContainer({ links }: LinksContainerProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links</h2>

      <div className="space-y-5">
        {links.map((link, index) => (
          <LinkItem key={index} name={link.name} link={link.link} />
        ))}
      </div>

      <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700">
        <PlusIcon className="size-5" />
        <span>New Link</span>
      </button>
    </div>
  );
}
