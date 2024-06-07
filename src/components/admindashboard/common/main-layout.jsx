"use client";

import { cn } from "lib/utils";
import { useStore } from "../../../hooks/use-store";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { useSidebarToggle } from "../../../hooks/use-sidebar-toogle";
import { useContext } from "react";
import ThemeContext from "context/theme-context";

export default function Layout({ children }) {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  // if (!sidebar) return null;

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Sidebar theme={theme} />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[20px]" : "lg:ml-72",
          theme == "dark" ? "bg-gray-900" : " bg-mainbg"
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[20px]" : "lg:ml-72"
        )}
      >
        <Footer theme={theme} />
      </footer>
    </>
  );
}
