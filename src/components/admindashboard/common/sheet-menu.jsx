import { MenuIcon, PanelsTopLeft } from "lucide-react";

import { Button } from "components/ui/button";
import { Menu } from "./menu";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from "components/ui/sheet";
import { Link } from "react-router-dom";
import { cn } from "lib/utils";
import { useContext } from "react";
import ThemeContext from "context/theme-context";

export function SheetMenu() {
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button
          className={cn("h-8 mr-3", theme == "dark" ? "text-textlight" : "")}
          variant="outline"
          size="icon"
        >
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent
        className={cn(
          "sm:w-72 px-3 h-full flex flex-col",
          theme == "dark" ? "bg-slate-950" : "bg-white"
        )}
        side="left"
      >
        <SheetHeader>
          <Button
            className={
              "transition-transform ease-in-out duration-300 mb-1 mt-3"
            }
            variant="link"
            asChild
          >
            <Link to="/dashboard" className="flex items-center gap-2">
              <img
                src={
                  theme == "dark"
                    ? "/logotechysquad-light.png"
                    : "/logotechysquad-dark.png"
                }
                className="w-[80%]"
              />
            </Link>
          </Button>
        </SheetHeader>
        <Menu theme={theme} isOpen />
      </SheetContent>
    </Sheet>
  );
}
