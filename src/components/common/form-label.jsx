import { Label } from "components/ui/label";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import React, { useContext } from "react";

const FormLabel = ({ htmlfor, label }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Label
        htmlFor={htmlfor}
        className={cn(theme == "dark" ? "text-white" : "text-slate-900")}
      >
        {label}
      </Label>
    </>
  );
};

export default FormLabel;
