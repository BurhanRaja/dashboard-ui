import { Button } from "components/ui/button";
import React from "react";

const CustomTableButton = ({ children, ...props }) => {
  return (
    <>
      <Button
        {...props}
        className="bg-primary text-white hover:bg-secondary text-xs h-7 px-2 py-3"
      >
        {children}
      </Button>
    </>
  );
};

export default CustomTableButton;
