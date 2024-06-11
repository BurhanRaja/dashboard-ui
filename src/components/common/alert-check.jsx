import React, { useContext } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "components/ui/alert-dialog";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";

const AlertCheck = ({ button, executeButton, title, description, isOpen, setOpen }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <AlertDialog open={isOpen} onOpenChange={(open) => setOpen(open)}>
        <AlertDialogContent
          className={cn(
            theme == "dark"
              ? "bg-slate-950 text-white border-slate-700"
              : "bg-slate-100 border-slate-200"
          )}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription
              className={cn(
                theme == "dark" ? "text-slate-500" : "text-slate-800"
              )}
            >
              {description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className={cn(
                theme == "dark"
                  ? "bg-slate-900 hover:bg-slate-800 border-slate-800"
                  : "bg-slate-100 hover:bg-white"
              )}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction>{executeButton}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AlertCheck;
