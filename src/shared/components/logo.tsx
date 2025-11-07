import { coatHanger } from "@lucide/lab";
import { Icon } from "lucide-react";

export const Logo = () => {
  return (
    <h1
      aria-label="Brand Lab"
      className="items-center gap-1 flex flex-row text-primary"
    >
      <Icon iconNode={coatHanger} className="size-6" />
      <span className="text-2xl font-semibold">BrandLab</span>
    </h1>
  );
};
