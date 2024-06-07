import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";

export const bonusListColumns = [
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
    accessorKey: "mt5id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="MT5 ID" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("mt5id")}</div>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("amount")}</div>,
  },
  {
    accessorKey: "equity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Equity" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("equity")}</div>,
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => (
      <div className="">
        {row.getValue("type") == "give" ? <p>Give</p> : <p>Remove</p>}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "comment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Comment" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("comment")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Registration Date" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("createdAt")}</div>,
  },
];

export const type = [
  {
    value: "give",
    label: "Give",
  },
  {
    value: "remove",
    label: "Remove",
  },
];

export const bonusListSearchKeys = [
  {
    value: "mt5id",
    label: "MT5 ID",
  },
  {
    value: "comment",
    label: "Comment",
  },
];

export const bonusListFacetFilter = [
  {
    key: "type",
    title: "Type",
    options: type,
  },
];
