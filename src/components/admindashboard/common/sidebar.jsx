import { PanelsTopLeft } from "lucide-react";

import { cn } from "lib/utils";
import { useStore } from "../../../hooks/use-store";
import { Button } from "components/ui/button";
import { Menu } from "./menu";
import { useSidebarToggle } from "../../../hooks/use-sidebar-toogle";
import { SidebarToggle } from "./sidebar-toggle";
import { Link } from "react-router-dom";
// import LogoLight from "";

export function Sidebar({ theme }) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        sidebar?.isOpen === false ? "w-[20px]" : " w-72",
        theme === "dark" ? "bg-slate-950" : ""
      )}
    >
      <SidebarToggle
        theme={theme}
        isOpen={sidebar?.isOpen}
        setIsOpen={sidebar?.setIsOpen}
      />
      <div className="relative h-full flex flex-col py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1 mt-3",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link to="/dashboard" className="flex items-center gap-2">
            <img
              src={
                theme == "dark"
                  ? "/logotechysquad-light.png"
                  : "/logotechysquad-dark.png"
              }
              className="w-[80%]"
            />
          </Link>
        </Button>
        <div className="px-5">
          <hr
            className={cn(
              "h-px mt-8 border-0",
              theme == "dark" ? " bg-gray-200" : "bg-gray-700"
            )}
          />
        </div>
        <Menu isOpen={sidebar?.isOpen} theme={theme} />
      </div>
    </aside>
  );
}
