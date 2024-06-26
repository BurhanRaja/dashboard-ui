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
            "sm:mx-2 flex h-20 rounded-md items-center backdrop-blur-lg lg:px-7 md:px-7 px-2 lg:mx-4 md:mx-2 mx-1",
            theme == "dark" ? "bg-darkactive/40" : "bg-lightactive/40"
          )}
        >
          <div className="flex items-center ">
            <SheetMenu />
            <div>
              <Breadcrumb
                className={cn("mb-1 md:block hidden", theme == "dark" ? "text-white" : "")}
              >
                <BreadcrumbList className="">
                  {breadcrumb?.map((el, index) => {
                    return (
                      <>
                        <BreadcrumbItem key={index + 1} className={"md:text-xs text-[0.5rem]"}>
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
                  "font-semibold text-base lg:text-2xl md:text-xl",
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
                "flex space-x-2 rounded-full items-center xl:p-3 xl:py-2 lg:p-3 lg:py-2 md:p-2 md:py-1.5 p-1",
                theme == "dark"
                  ? "bg-slate-950 shadow-[7px_7px_15px_0px_rgba(6,7,11,0.72)]"
                  : "bg-white shadow-[14px_17px_40px_4px_rgba(112,144,176,0.18)]"
              )}
            >
              <div className="relative items-center md:flex hidden">
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
              <div className="md:hidden block">
                <Search
                  size={15}
                  className={cn(
                    "",
                    theme == "dark" ? "text-white" : "text-darkicon"
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
