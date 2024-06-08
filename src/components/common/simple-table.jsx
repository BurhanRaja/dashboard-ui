import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/table";
import { cn } from "lib/utils";

const SimpleTable = ({ caption, headData, bodyData, theme }) => {
  return (
    <Table
      checkBorder
      theme={theme}
      className={cn("", theme == "dark" ? "text-white" : "")}
      style={{ padding: "0" }}
    >
      <TableCaption>{caption}</TableCaption>
      <TableHeader
        className={cn("", theme == "dark" ? "bg-gray-950" : "bg-slate-200")}
      >
        <TableRow>
          {headData?.map((el) => {
            return (
              <TableHead key={el?.name} className={cn(el?.style, "font-semibold")}>
                {el?.name}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {bodyData?.map((el) => (
          <TableRow
            key={el?.id}
            className={cn(theme == "dark" ? "border-b-slate-700" : "")}
          >
            {el?.data?.map((data) => {
              return (
                <TableCell
                  key={data?.name}
                  className={data?.style + " p-2 px-4"}
                >
                  {data?.name}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;
