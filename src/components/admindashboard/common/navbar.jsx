import { ModeToggle } from "./mode-toggle";
import { UserNav } from "./user-nav";
import { SheetMenu } from "./sheet-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "components/ui/breadcrumb";
import Notification from "./notification";
import { Search } from "lucide-react";
import { useContext } from "react";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import { Link } from "react-router-dom";

export function Navbar({ breadcrumb, title }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="sticky z-10 top-4">
      <header className="w-[100%]">
        <div
          className={cn(
            "mx-4 sm:mx-2 flex h-20 rounded-md items-center backdrop-blur-lg px-7",
            theme == "dark" ? "bg-darkactive/40" : "bg-lightactive/40"
          )}
        >
          <div className="flex items-center ">
            <SheetMenu />
            <div>
              <Breadcrumb
                className={cn("mb-1", theme == "dark" ? "text-white" : "")}
              >
                <BreadcrumbList>
                  {breadcrumb?.map((el, index) => {
                    return (
                      <>
                        <BreadcrumbItem key={index + 1} className={"text-xs"}>
                          <BreadcrumbLink asChild>
                            <Link to={el?.link}>{el?.name}</Link>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        {index + 1 != breadcrumb?.length && (
                          <BreadcrumbSeparator className="text-xs" />
                        )}
                      </>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
              <h1
                className={cn(
                  "font-semibold text-3xl",
                  theme == "dark" ? "text-white" : ""
                )}
              >
                {title}
              </h1>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <div
              className={cn(
                "flex space-x-2 rounded-full items-center  p-3 py-2",
                theme == "dark"
                  ? "bg-slate-950 shadow-[7px_7px_15px_0px_rgba(6,7,11,0.72)]"
                  : "bg-white shadow-[14px_17px_40px_4px_rgba(112,144,176,0.18)]"
              )}
            >
              <div className="relative flex items-center">
                <span className="absolute">
                  <Search
                    size={15}
                    className={cn(
                      "w-4 h-4 mx-3",
                      theme == "dark" ? "text-lighticon" : "text-darkicon"
                    )}
                  />
                </span>
                <input
                  type="email"
                  placeholder="Search..."
                  className={cn(
                    "block w-full text-sm py-2.5  border rounded-full pl-9 pr-5  focus:border-mediumactive focus:outline-none placeholder-gray-500/70",
                    theme == "dark"
                      ? "bg-slate-900 border-none text-white"
                      : "text-gray-700 bg-white/50 border-gray-200 "
                  )}
                />
              </div>
              <div className="flex items-center">
                <Notification theme={theme} />
                <ModeToggle theme={theme} />
              </div>
              <UserNav theme={theme} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
