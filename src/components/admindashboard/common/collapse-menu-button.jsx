import { useEffect, useState } from "react";
import { ChevronDown, Dot } from "lucide-react";

import { cn } from "lib/utils";
import { Button } from "components/ui/button";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "components/ui/collapsible";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";

export function CollapseMenuButton({
  theme,
  icon: Icon,
  label,
  activeStatus,
  submenus,
  isOpen,
}) {
  const isSubmenuActive = submenus.some((submenu) => submenu.active);
  const { pathname } = useLocation();

  const [isCollapsed, setIsCollapsed] = useState();

  console.log("Active Status", activeStatus);
  console.log("Submenu Active", isSubmenuActive);

  useEffect(() => {
    if (!activeStatus && !isSubmenuActive) {
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true);
    }
  }, [activeStatus, isSubmenuActive]);

  return isOpen ? (
    <Collapsible
      open={isCollapsed}
      onOpenChange={setIsCollapsed}
      className="w-full mb-1"
    >
      <CollapsibleTrigger
        className="[&[data-state=open]>div>div>svg]:rotate-180 transition-all ease-out duration-200"
        asChild
      >
        <Button
          className={cn(
            "w-full justify-start h-10 py-5",
            theme == "dark"
              ? "text-textlight hover:bg-darkactive"
              : "hover:bg-lightactive text-textdark",
            activeStatus && theme == "dark"
              ? "bg-darkactive text-textlight"
              : activeStatus && theme == "light"
              ? "bg-lightactive text-textdark"
              : ""
          )}
        >
          <div className="w-full items-center flex justify-between">
            <div className="flex items-center">
              <span className="mr-2">
                <Icon size={20} />
              </span>
              <p
                className={cn(
                  "max-w-[150px] truncate",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-96 opacity-0"
                )}
              >
                {label}
              </p>
            </div>
            <div
              className={cn(
                "whitespace-nowrap",
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-96 opacity-0"
              )}
            >
              <ChevronDown
                size={18}
                className="transition-all ease-in duration-200"
              />
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          "rounded-lg overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down transition-all ease-out duration-200 mt-1 px-2 py-2",
          theme == "dark" ? "bg-darkactive" : "bg-slate-100"
        )}
      >
        {submenus.map(({ href, label, active }, index) => (
          <Button
            key={index}
            className="w-full justify-start h-10 bg-inherit hover:bg-inherit rounded-none"
            asChild
          >
            <Link
              to={href}
              className={cn(
                "hover:text-primary",
                theme == "dark" ? "text-textlight" : "text-textdark",
                active ? "border-l-4 border-primary text-primary" : ""
              )}
            >
              <span className="mr-4 ml-1">{/* <Dot size={18} /> */}</span>
              <p
                className={cn(
                  "max-w-[170px] truncate  text-[13px]",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-96 opacity-0"
                )}
              >
                {label}
              </p>
            </Link>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant={activeStatus ? "secondary" : "ghost"}
                className="w-full justify-start h-10 mb-1"
              >
                <div className="w-full items-center flex justify-between">
                  <div className="flex items-center">
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      <Icon size={18} />
                    </span>
                    <p
                      className={cn(
                        "max-w-[200px] truncate",
                        isOpen === false ? "opacity-0" : "opacity-100"
                      )}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" align="start" alignOffset={2}>
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent side="right" sideOffset={25} align="start">
        <DropdownMenuLabel className="max-w-[190px] truncate">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {submenus.map(({ href, label }, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link className="cursor-pointer" to={href}>
              <p className="max-w-[180px] truncate">{label}</p>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuArrow className="fill-border" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
