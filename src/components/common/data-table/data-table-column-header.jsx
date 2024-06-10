import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react";

import { cn } from "lib/utils";
import { Button } from "components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import { useContext } from "react";
import ThemeContext from "context/theme-context";

export function DataTableColumnHeader({ column, title, className }) {
  const { theme } = useContext(ThemeContext);

  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2 justify-center", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 text-xs data-[state=open]:bg-accent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDown className="ml-2 h-3 w-3" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUp className="ml-2 h-3 w-3" />
            ) : (
              <ChevronsUpDown className="ml-2 h-3 w-3" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className={cn(
            theme == "dark"
              ? "bg-gray-950 text-white border-gray-900"
              : "bg-white"
          )}
        >
          <DropdownMenuItem
            onClick={() => column.toggleSorting(false)}
            className={cn(
              "hover:cursor-pointer ",
              theme == "dark" ? "hover:bg-gray-900" : "hover:bg-slate-100"
            )}
          >
            <ArrowUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => column.toggleSorting(true)}
            className={cn(
              "hover:cursor-pointer ",
              theme == "dark" ? "hover:bg-gray-900" : "hover:bg-slate-100"
            )}
          >
            <ArrowDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => column.toggleVisibility(false)}
            className={cn(
              "hover:cursor-pointer ",
              theme == "dark" ? "hover:bg-gray-900" : "hover:bg-slate-100"
            )}
          >
            <EyeOff className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
