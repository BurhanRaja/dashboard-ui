import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import { useContext } from "react";

export default function RecentUsers() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <div className=" space-y-1">
          <p
            className={cn(
              "text-sm font-medium leading-none",
              theme == "dark" ? "text-white" : ""
            )}
          >
            Olivia Martin
          </p>
        </div>
        <div className="ml-auto text-xs text-lighticon font-medium">
          14 May, 2024
        </div>
      </div>
      <div className="flex items-center">
        <div className=" space-y-1">
          <p
            className={cn(
              "text-sm font-medium leading-none",
              theme == "dark" ? "text-white" : ""
            )}
          >
            Jackson Lee
          </p>
        </div>
        <div className="ml-auto text-xs text-lighticon font-medium">
          14 May, 2024
        </div>
      </div>
      <div className="flex items-center">
        <div className=" space-y-1">
          <p
            className={cn(
              "text-sm font-medium leading-none",
              theme == "dark" ? "text-white" : ""
            )}
          >
            Isabella Nguyen
          </p>
        </div>
        <div className="ml-auto text-xs text-lighticon font-medium">
          14 May, 2024
        </div>
      </div>
      <div className="flex items-center">
        <div className=" space-y-1">
          <p
            className={cn(
              "text-sm font-medium leading-none",
              theme == "dark" ? "text-white" : ""
            )}
          >
            William Kim
          </p>
        </div>
        <div className="ml-auto text-xs text-lighticon font-medium">
          14 May, 2024
        </div>
      </div>
      <div className="flex items-center">
        <div className=" space-y-1">
          <p
            className={cn(
              "text-sm font-medium leading-none",
              theme == "dark" ? "text-white" : ""
            )}
          >
            Sofia Davis
          </p>
        </div>
        <div className="ml-auto text-xs text-lighticon font-medium">
          14 May, 2024
        </div>
      </div>
      <div className="flex items-center">
        <div className=" space-y-1">
          <p
            className={cn(
              "text-sm font-medium leading-none",
              theme == "dark" ? "text-white" : ""
            )}
          >
            Sofia Davis
          </p>
        </div>
        <div className="ml-auto text-xs text-lighticon font-medium">
          14 May, 2024
        </div>
      </div>
      <div className="flex items-center">
        <div className=" space-y-1">
          <p
            className={cn(
              "text-sm font-medium leading-none",
              theme == "dark" ? "text-white" : ""
            )}
          >
            Sofia Davis
          </p>
        </div>
        <div className="ml-auto text-xs text-lighticon font-medium">
          14 May, 2024
        </div>
      </div>
    </div>
  );
}
