import React, { useContext, useState } from "react";
import { Check, ChevronDown, ChevronsDown, ChevronsUpDown } from "lucide-react";

import { cn } from "lib/utils";
import { Button } from "components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover";
import ThemeContext from "context/theme-context";

const FormSelectSearch = ({
  data,
  emptyText,
  value,
  setValue,
  margin,
  width,
}) => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Popover open={open} onOpenChange={() => setOpen(!open)}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-[100%] justify-between p-4 py-6",
              theme == "dark"
                ? "bg-slate-900 text-lighticon border-slate-800"
                : "bg-white text-lighticon"
            )}
            style={{
              marginTop: margin ? "5px" : "",
            }}
          >
            {value
              ? data.find((el) => el.value === value)?.label
              : "Please Choose..."}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn(
            "p-0",
            width ? width : "w-[350px] ",
            theme == "dark" ? "border-gray-700" : "border-slate-100"
          )}
        >
          <Command
            className={cn(
              theme == "dark"
                ? "bg-gray-950 text-white"
                : "bg-white border-slate-100"
            )}
          >
            <CommandInput theme={theme} placeholder="Search..." />
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {data?.map((el) => (
                  <CommandItem
                    key={el?.value}
                    value={el?.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === el?.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {el?.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default FormSelectSearch;
