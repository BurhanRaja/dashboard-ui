import { Textarea } from "components/ui/textarea";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import React, { useContext } from "react";

const FormTextarea = ({ id, placeholder, value, setValue }) => {
    const {theme} = useContext(ThemeContext);
  return (
    <>
      <Textarea
        id={id}
        className={cn("mt-2", theme == "dark" ? "bg-slate-900 border-slate-800 text-white focus-visible:ring-offset-0" : "text-black")}
        name={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
};

export default FormTextarea;
