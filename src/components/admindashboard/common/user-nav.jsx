import { CircleUser, LayoutGrid, LogOut, User } from "lucide-react";

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

export function UserNav({ theme }) {
  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="relative h-8 w-8 rounded-full"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="#" alt="Avatar" />
                  <AvatarFallback
                    className={cn(
                      "ring-0",
                      theme == "dark"
                        ? "text-darkactive bg-lightactive"
                        : "text-white bg-darkactive "
                    )}
                  >
                    J
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent className="bg-white" side="bottom">
            Profile
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent
        className={cn(
          "w-56 py-3 px-2 mt-3",
          theme == "dark" ? "bg-gray-950 text-white border-none" : "bg-white"
        )}
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">
              johndoe@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className={cn(
              "hover:cursor-pointer rounded-lg p-2",
              theme == "dark" ? "hover:bg-darkactive" : "hover:bg-lightactive"
            )}
            asChild
          >
            <a href="/dashboard" className="flex items-center">
              <User className="w-4 h-4 mr-3 text-muted-foreground" />
              Profile
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={cn(
              "hover:cursor-pointer rounded-lg p-2",
              theme == "dark" ? "hover:bg-darkactive" : "hover:bg-lightactive"
            )}
            asChild
          >
            <a href="/account" className="flex items-center">
              <LayoutGrid className="w-4 h-4 mr-3 text-muted-foreground" />
              Change Password
            </a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          className="hover:cursor-pointer hover:bg-danger hover:text-white rounded-lg p-2"
          onClick={() => {}}
        >
          <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
