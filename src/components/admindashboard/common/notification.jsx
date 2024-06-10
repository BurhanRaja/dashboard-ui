import React from "react";
import { Bell, LayoutGrid, LogOut, User } from "lucide-react";

import { Button } from "components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import { cn } from "lib/utils";
import { Link } from "react-router-dom";

const Notification = ({ theme }) => {
  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full bg-background px-2">
                {/* <Moon className="w-[1rem] h-[1rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" /> */}
                {/* Small Screens */}
                <Bell
                  size={15}
                  className={cn(
                    "rotate-0 scale-1000 md:hidden block transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0",
                    theme == "dark" ? "text-white" : "text-lighticon"
                  )}
                />

{/* Large and Medium Screens */}
                <Bell
                  size={18}
                  className={cn(
                    "rotate-0 scale-1000 md:block hidden transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0",
                    theme == "dark" ? "text-white" : "text-lighticon"
                  )}
                />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent className="bg-lightactive" side="bottom">
            Notification
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent
        className={cn(
          "p-4 mt-2 w-[22rem] md:w-[30rem] rounded-2xl border-none",
          theme == "dark" ? "bg-gray-950" : "bg-white"
        )}
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal pt-4 px-2">
          <div className="flex items-center justify-between space-y-1">
            <p
              className={cn(
                "text-lg font-semibold leading-none",
                theme == "dark" ? "text-white" : ""
              )}
            >
              Notifications
            </p>
            <button className="text-primary">Mark all as read</button>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="border" />
        <DropdownMenuGroup className="">
          {[0, 1, 2, 3, 4]?.map((el, index) => {
            return (
              <DropdownMenuItem
                key={index + 1}
                className={cn(
                  "hover:cursor-pointer rounded-xl p-3 py-5",
                  theme == "dark"
                    ? "hover:bg-darkactive"
                    : "hover:bg-lightactive"
                )}
                asChild
              >
                <div
                  className=""
                  style={{ fontSize: "15px", display: "block" }}
                >
                  <p
                    className={cn(
                      "font-semibold mb-0",
                      theme == "dark" ? "text-textlight" : "text-darkactive"
                    )}
                  >
                    New User is created Successfully by Admin.
                  </p>
                  <small
                    className={cn(
                      "flex items-center justify-between",
                      theme == "dark" ? "text-lighticon" : ""
                    )}
                  >
                    <p>2024-05-31 10:05:30</p>
                    <button className="text-primary">Mark as Read</button>
                  </small>
                </div>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;
