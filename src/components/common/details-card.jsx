import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Separator } from "components/ui/separator";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import React, { useContext } from "react";

const DetailsCard = ({ title, count, small }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Card
        className={cn(
          "rounded-3xl pb-3",
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
        <div className="px-6">
          <div>
            <CardHeader className="flex flex-row items-center justify-center pl-0 pb-1">
              <CardTitle
                className="text-2xl font-semibold"
                style={{ fontSize: small && "15px" }}
              >
                {count}
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-0 text-center p-0">
              <Separator className="bg-slate-500" />
              <div className="text-lg mt-3 text-lighticon pb-1">{title}</div>
            </CardContent>
          </div>
        </div>
      </Card>
    </>
  );
};

export default DetailsCard;
