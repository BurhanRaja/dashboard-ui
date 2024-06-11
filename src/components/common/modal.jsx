import React, { useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";

const Modal = ({
  openButton,
  title,
  description,
  content,
  width,
  isOpen,
  setOpen,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => setOpen(open)}
      >
        <DialogTrigger asChild>{openButton}</DialogTrigger>
        <DialogContent
          className={cn(
            "p-0",
            width,
            theme == "dark"
              ? "bg-gray-950 border-slate-900 text-white"
              : "bg-gray-200"
          )}
        >
          <DialogHeader
            className={cn(
              "p-4",
              theme == "dark" ? "bg-gray-950" : "bg-gray-400"
            )}
          >
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="p-5">{content}</div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
