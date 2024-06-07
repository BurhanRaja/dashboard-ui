import { Ellipsis, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "lib/utils";
import { getMenuList } from "lib/admin-menu-list";
import { Button } from "components/ui/button";
import { ScrollArea } from "components/ui/scroll-area";
import { CollapseMenuButton } from "./collapse-menu-button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "components/ui/tooltip";

export function Menu({ isOpen, theme }) {
  const { pathname } = useLocation();
  const menuList = getMenuList(pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block px-5">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1">
          {menuList.map(({ menus }, index) => (
            <li className={"w-full mt-0"} key={index}>
              {menus.map(
                ({ href, label, icon: Icon, active, submenus }, index) =>
                  submenus.length === 0 ? (
                    <div className="w-full" key={index}>
                      <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Button
                              className={cn(
                                "w-full justify-start h-10 mb-1 py-5 text-textdark rounded-none",
                                theme == "dark"
                                  ? "hover:bg-darkactive text-white"
                                  : "hover:bg-lightactive",
                                active
                                  ? "border-r-4 border-primary text-primary"
                                  : "rounded-md"
                              )}
                              asChild
                            >
                              <Link to={href} className="">
                                <span
                                  className={cn(isOpen === false ? "" : "mr-2")}
                                >
                                  <Icon size={20} />
                                </span>
                                <p
                                  className={cn(
                                    "max-w-[200px] truncate",
                                    isOpen === false
                                      ? "-translate-x-96 opacity-0"
                                      : "translate-x-0 opacity-100"
                                  )}
                                >
                                  {label}
                                </p>
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          {isOpen === false && (
                            <TooltipContent side="right">
                              {label}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <div className="w-full" key={index}>
                      <CollapseMenuButton
                        theme={theme}
                        icon={Icon}
                        label={label}
                        activeStatus={active}
                        submenus={submenus}
                        isOpen={isOpen}
                      />
                    </div>
                  )
              )}
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  );
}
