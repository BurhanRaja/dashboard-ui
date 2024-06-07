import React from "react";
import { flexRender } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/table";
import { cn } from "lib/utils";

const CustomTable = ({ table, columns, theme }) => {
  console.log(table.getRowModel().rows);
  return (
    <Table className="mb-0 h-10">
      <TableHeader
        className={cn(
          theme == "dark" ? "bg-slate-900 text-white" : "bg-gray-300"
        )}
      >
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row, index) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              className={cn(
                "text-xs",
                theme == "dark"
                  ? "bg-slate-950 text-white border-slate-700"
                  : "bg-slate-100",
                theme == "dark" && (index + 1) % 2 == 0 ? "bg-gray-900" : "",
                theme == "light" && (index + 1) % 2 == 0 ? "bg-slate-200" : ""
              )}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="px-3 text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className={cn(
                "h-12 text-center",

                theme == "dark" ? "bg-slate-800 text-white" : "bg-slate-100   "
              )}
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
