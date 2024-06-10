import { Card, CardContent } from "components/ui/card";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import React, { useContext, useState } from "react";

const AdminCard = ({ children, table }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Card
        className={cn(
          "w-full rounded-3xl border-none shadow",
          table ? "px-0.5 py-2 pt-0.5" : " px-0.5 py-4 md:p-6",
          theme == "dark" ? "bg-slate-950" : "bg-white"
        )}
        // style={{
        //   boxShadow:
        //     theme == "dark"
        //       ? "rgb(6 7 11 / 72%) 7px 7px 15px 0px"
        //       : "7px 8px 13px 6px rgba(112,144,176,0.18)",
        // }}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </>
  );
};

export default AdminCard;
