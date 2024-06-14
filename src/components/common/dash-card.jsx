import React, { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { cn } from "lib/utils";
import ThemeContext from "context/theme-context";

const DashCard = ({ title, link, icon, count, small, isLoading }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Card
        className={cn(
          "rounded-3xl",
          theme == "dark"
            ? "bg-slate-950 border-slate-950 text-white"
            : "bg-white"
        )}
        // style={{
        //   boxShadow:
        //     theme == "dark"
        //       ? "rgb(6 7 11 / 72%) 7px 7px 15px 0px"
        //       : "7px 8px 13px 6px rgba(112,144,176,0.18)",
        // }}
      >
        <div className="flex items-center justify-between px-6">
          <div>
            <CardHeader className="flex flex-row items-center justify-between pl-0 pb-1">
              {isLoading ? (
                <div class="h-5 animate-pulse bg-slate-700 rounded-xl col-span-2 w-full"></div>
              ) : (
                <CardTitle
                  className="text-lg font-semibold"
                  style={{ fontSize: small && "15px" }}
                >
                  {title}
                </CardTitle>
              )}
            </CardHeader>
            <CardContent className="pl-0">
              <div className="text-2xl font-semibold pb-1">
                {isLoading ? (
                  <div class="grid grid-cols-3 gap-4 py-4">
                    <div class="h-2 animate-pulse bg-slate-700 rounded col-span-2"></div>
                    <div class="rounded col-span-1"></div>
                  </div>
                ) : (
                  count
                )}
              </div>
              {link && (
                <a href={link} className="text-sm mt-2 text-primary">
                  View More
                </a>
              )}
            </CardContent>
          </div>
          {isLoading ? (
            <div class="rounded-full animate-pulse bg-slate-700 h-20 w-20"></div>
          ) : (
            icon
          )}
        </div>
      </Card>
    </>
  );
};

export default DashCard;
