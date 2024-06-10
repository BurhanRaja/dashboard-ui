import { Label } from "components/ui/label";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import React, { useContext } from "react";

const CustomFormLabel = ({ htmlfor, label, compulsory, textbig }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Label
        htmlFor={htmlfor}
        className={cn(
          textbig ? "" : "text-xs",
          theme == "dark" ? "text-white" : "text-slate-900"
        )}
      >
        {label + " "} {compulsory && <span className="text-danger">*</span>}
      </Label>
    </>
  );
};

export default CustomFormLabel;
