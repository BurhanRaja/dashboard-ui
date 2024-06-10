import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";

export const ibPlanColumns = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Registration Date" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("createdAt")}</div>,
  },
];

export const ibPlanSearchKeys = [
  {
    value: "name",
    label: "Name",
  },
];
