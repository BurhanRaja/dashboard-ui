import { ChevronLeft } from "lucide-react";

import { cn } from "lib/utils";
import { Button } from "components/ui/button";

export function SidebarToggle({ isOpen, setIsOpen, theme }) {
  return (
    <div className="invisible lg:visible absolute rounded-md top-[12px] -right-[16px] z-20 bg-lime-500 dark:bg-default-foreground">
      <Button
        onClick={() => setIsOpen?.()}
        className="w-8 h-8 bg-primary text-lightactive hover:bg-lightactive hover:text-primary rounded-md"
        size="icon"
      >
        <ChevronLeft
          className={cn(
            "h-4 w-4 transition-transform ease-in-out duration-700 font-bold text-lg",
            isOpen === false ? "rotate-180" : "rotate-0"
          )}
        />
      </Button>
    </div>
  );
}
