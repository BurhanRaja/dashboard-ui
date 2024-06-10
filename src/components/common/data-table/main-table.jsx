import React, { useContext, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

// Tool Bar
import { X } from "lucide-react";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";

// Pagination
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import CustomTable from "components/common/data-table/table";
import { DataTableFacetedFilter } from "components/common/data-table/data-table-faceted-filter";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import DataTablePagination from "components/common/data-table/data-table-pagination";
import DataTableViewFilter from "./data-table-view-filter";

const MainDataTable = ({
  columns,
  data,
  defaultSearchKey,
  searchKeys,
  facetFilter,
}) => {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [sorting, setSorting] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const isFiltered = table.getState().columnFilters.length > 0;

  const [key, setKey] = useState(defaultSearchKey);
  const { theme } = useContext(ThemeContext);

  const handleInputFilter = (val) => {
    setKey(val);
    for (const col of table.getAllColumns()) {
      col.setFilterValue("");
    }
  };

  return (
    <div className="space-y-4">
      {/* ToolBar Start */}
      <div className="">
        <div className="flex flex-1 md:items-center md:flex-row md:justify-between flex-col-reverse justify-start items-start space-x-2 mb-3">
          <div className="flex flex-1 items-center space-x-2">
            {searchKeys?.length > 0 && (
              <>
                <Select
                  value={key}
                  onValueChange={(val) => handleInputFilter(val)}
                >
                  <SelectTrigger
                    className={cn(
                      "max-w-[120px] p-0.5 h-10 px-2",
                      theme == "dark"
                        ? "text-white bg-slate-900 border-slate-800"
                        : ""
                    )}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent
                    className={cn(
                      theme == "dark"
                        ? "bg-gray-950 text-white border-gray-900"
                        : "bg-white"
                    )}
                  >
                    {searchKeys?.map((el) => {
                      return (
                        <SelectItem value={el?.value}>{el?.label}</SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <Input
                  placeholder={`Search...`}
                  value={table.getColumn(key).getFilterValue() ?? ""}
                  onChange={(event) =>
                    table.getColumn(key).setFilterValue(event.target.value)
                  }
                  className={cn(
                    "h-10 w-[200px] md:w-[250px] lg:w-[290px]",
                    theme == "dark"
                      ? "text-white bg-slate-900 border-slate-800"
                      : ""
                  )}
                />
                {isFiltered && (
                  <Button
                    variant="ghost"
                    onClick={() => table.resetColumnFilters()}
                    className={"h-8 px-2 lg:px-3 bg-primary text-white"}
                  >
                    Reset
                    <X className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </>
            )}
          </div>
          <DataTableViewFilter table={table} theme={theme} />
        </div>
        <div className="md:flex md:flex-1 md:space-x-2 grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {facetFilter?.map((el) => {
            return (
              table.getColumn(el?.key) && (
                <DataTableFacetedFilter
                  theme={theme}
                  column={table.getColumn(el?.key)}
                  title={el?.title}
                  options={el?.options}
                />
              )
            );
          })}
          {searchKeys?.length == 0 && isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className={"h-8 px-2 lg:px-3 bg-primary text-white"}
            >
              Reset
              <X className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      {/* ToolBar End */}
      <CustomTable columns={columns} table={table} theme={theme} />
      <DataTablePagination table={table} theme={theme} />
    </div>
  );
};

export default MainDataTable;
