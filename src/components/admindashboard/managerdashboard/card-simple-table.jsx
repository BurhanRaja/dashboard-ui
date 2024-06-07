import React from "react";
import SimpleTable from "components/common/simple-table";
import { Card, CardContent, CardHeader } from "components/ui/card";
import { cn } from "lib/utils";

const CardSimpleTable = ({ title, headerData, bodyData, theme }) => {
  return (
    <>
      <Card
        className={cn(
          "w-full col-span-2 rounded-3xl border-none shadow p-4 md:p-6",
          theme == "dark" ? "bg-slate-950" : "bg-white"
        )}
        // style={{
        //   boxShadow:
        //     theme == "dark"
        //       ? "rgb(6 7 11 / 72%) 7px 7px 15px 0px"
        //       : "7px 8px 13px 6px rgba(112,144,176,0.18)",
        // }}
      >
        <CardHeader>
          <div className="flex justify-between mb-1">
            <div>
              <p
                className={cn(
                  "text-2xl leading-none font-bold",
                  theme == "dark" ? "text-white" : "text-gray-900 "
                )}
              >
                {title}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent style={{ padding: "0" }}>
          <SimpleTable
            theme={theme}
            headData={headerData}
            bodyData={bodyData}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default CardSimpleTable;
