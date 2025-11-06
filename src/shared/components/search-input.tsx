import { SearchIcon } from "lucide-react";
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupButton } from "./ui-kit/input-group";

export const SearchInput = ({
  className
}:{className: string}) => (
  <InputGroup className={className}>
  <InputGroupInput placeholder="Искать что угодно..." />
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
</InputGroup>
)