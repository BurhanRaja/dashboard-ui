import { Input } from "components/ui/input";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import React, { useContext } from "react";

const FormInput = ({ type, id, placeholder, disabled, value, setValue }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Input
        type={type}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(
          "mt-1 p-4 py-6",
          theme == "dark"
            ? "bg-slate-900 text-white border-slate-800 focus:border-slate-600 focus:ring-0 focus-visible:ring-slate-700 focus-visible:ring-offset-0"
            : "bg-white focus-visible:ring-slate-200 focus-visible:ring-offset-0"
        )}
      />
    </>
  );
};

export default FormInput;
