import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/utils";

export const Container = ({ asChild = false, className, children, ...props }: React.ComponentProps<"div"> & { asChild?: boolean }) => { 
  const Comp = asChild ? Slot : "div"

  return (
    <Comp className={cn("w-full px-2 flex-col lg:px-none md:px-none flex", className)} {...props}>
      {children}
    </Comp>
  )
}