import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";

export const userDetailsWithdrawColumns = [
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
    accessorKey: "withdrawFrom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Withdraw From" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("withdrawFrom")}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("amount")}</div>;
    },
  },
  {
    accessorKey: "withdrawTo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Withdraw To" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("withdrawTo")}</div>;
    },
  },
  {
    accessorKey: "paymentmethod",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("paymentmethod")}</div>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "note",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Note" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("note")}</div>;
    },
  },
  {
    accessorKey: "admincomment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Admin Comment" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("admincomment")}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-[80px]">
          {row.getValue("status") == "pending" ? (
            <p className="text-warning">Pending</p>
          ) : row.getValue("status") == "approved" ? (
            <p className="text-success">Approved</p>
          ) : (
            <p className="text-danger">Rejected</p>
          )}
        </div>
      );
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
  {
    accessorKey: "marketingname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Marketing Name" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("marketingname")}</div>;
    },
  },
];

export const userDetailsWithdrawSearchKeys = [
  {
    value: "withdrawTo",
    label: "Withdraw To",
  },
  {
    value: "marketingname",
    label: "Marketing name",
  },
];

export const paymentmethod = [
  {
    value: "bank",
    label: "bank",
  },
  {
    value: "cash",
    label: "cash",
  },
  {
    value: "crypto",
    label: "crypto",
  },
];

export const status = [
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "approved",
    label: "Approved",
  },
  {
    value: "rejected",
    label: "Rejected",
  },
];

export const userDetailsWithdrawFacetFilter = [
  {
    key: "status",
    title: "Status",
    options: status,
  },
  {
    key: "paymentmethod",
    title: "Payment Method",
    options: paymentmethod,
  },
];
