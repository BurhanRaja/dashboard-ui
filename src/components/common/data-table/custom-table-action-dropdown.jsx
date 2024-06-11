import React, { useContext } from "react";
import { Button } from "components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { cn } from "lib/utils";
import { Link } from "react-router-dom";
import ThemeContext from "context/theme-context";

const CustomTableActionDropdown = ({ data, customWidth }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex justify-center items-center w-[100%]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted bg-primary text-white hover:bg-secondary"
          >
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className={cn(
            "p-2 cursor-pointer w-[160px]",
            theme == "dark"
              ? `bg-gray-950 text-white border-none ${customWidth}`
              : `bg-white  ${customWidth}`
          )}
        >
          {data?.map((el, index) => {
            if (el?.type != "seperator") {
              return (
                <Link to={el?.link}>
                  <DropdownMenuItem
                    key={el?.name}
                    onClick={() => el?.setOpen ? el?.setOpen(true) : {}}
                    className={cn(
                      "hover:cursor-pointer rounded-md",
                      theme == "dark"
                        ? "hover:bg-slate-800"
                        : "hover:bg-slate-100",
                      el?.customClass ? el?.customClass : ""
                    )}
                  >
                    <div className="flex items-center space-x-2 flex-1">
                      {el?.icon}
                      <p>{el?.name}</p>
                    </div>
                  </DropdownMenuItem>
                </Link>
              );
            } else {
              return (
                <DropdownMenuSeparator
                  key={index + 1}
                  className="bg-slate-500"
                />
              );
            }
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CustomTableActionDropdown;
