import { Input } from "components/ui/input";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import React, { useContext } from "react";

const FormFileInput = ({ id, disabled, value, setValue }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Input
        type={"file"}
        disabled={disabled}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(
          "h-12 p-3.5 mt-1 text-slate-400",
          theme == "dark"
            ? "bg-slate-900 file:text-white border-slate-800 focus:border-slate-600 focus:ring-0"
            : "bg-white file:text-black"
        )}
      />
    </>
  );
};

export default FormFileInput;
