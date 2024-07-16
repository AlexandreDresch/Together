import { PlusIcon } from "lucide-react";
import LinkItem, { Link } from "./link-item";
import Button from "../shared/button";

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

      <Button variant="secondary" size="full">
        <PlusIcon className="size-5" />
        <span>New Link</span>
      </Button>
    </div>
  );
}
