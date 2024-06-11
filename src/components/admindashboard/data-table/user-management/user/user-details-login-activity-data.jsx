import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";

export const userDetailsLoginActivityColumns = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("id")}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "ipaddress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IP Address" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("ipaddress")}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("createdAt")}</div>;
    },
  },
];

export const userDetailsLoginactivitySearchKeys = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "ipaddress",
    label: "IP Address",
  },
];
