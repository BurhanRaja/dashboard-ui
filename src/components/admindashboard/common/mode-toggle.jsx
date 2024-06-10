import React, { useContext } from "react";
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Sun, Moon, Bell } from "lucide-react";

import { Button } from "components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "components/ui/tooltip";
import ThemeContext from "context/theme-context";
// import ThemeContext from "@context/theme-context";

export function ModeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            className="rounded-full bg-background px-2"
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            {theme == "dark" ? (
              <>
                <Sun
                  size={15}
                  className=" rotate-0 scale-1000 md:hidden block transition-transform ease-in-out duration-500 text-white"
                />
                <Sun
                  size={18}
                  className=" rotate-0 md:block hidden md:mr-2 scale-1000 transition-transform ease-in-out duration-500 text-white"
                />
              </>
            ) : (
              <>
                <Moon
                  size={18}
                  className="rotate-0 scale-1000 md:hidden block transition-transform ease-in-out duration-500 text-lighticon"
                />
                <Moon
                  size={18}
                  className="rotate-0 scale-1000 md:block hidden md:mr-2 transition-transform ease-in-out duration-500 text-lighticon"
                />
              </>
            )}
            <span className="sr-only">Switch Theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className=" bg-white" side="bottom">
          Switch Theme
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
