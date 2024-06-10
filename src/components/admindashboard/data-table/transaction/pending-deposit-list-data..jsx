export const pendingdepositlistColumns = [
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
    accessorKey: "nameEmail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name/Email" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("nameEmail")}</div>;
    },
  },
  {
    accessorKey: "depositTo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deposit To" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("depositTo")}</div>;
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
    accessorKey: "paymentmethod",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("paymentmethod")}</div>;
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
  },
];
