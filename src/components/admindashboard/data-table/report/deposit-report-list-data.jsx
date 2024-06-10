import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";

export const depositReportColumns = [
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
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "paymentid",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction ID" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("paymentid")}</div>;
    },
  },
  {
    accessorKey: "depositproof",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deposit Proof" />
    ),
    cell: ({ row }) => {
      return (
        <div className="">
          <div className="p-2 bg-white">
            <img src="/logotechysquad-dark.png" width={80} />
          </div>
        </div>
      );
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
  {
    accessorKey: "adminame",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Admin Name" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("adminname")}</div>;
    },
  },
];

export const depositReportSearchKeys = [
  {
    value: "nameEmail",
    label: "Name/Email",
  },
  {
    value: "depositTo",
    label: "Deposit To",
  },
  {
    value: "marketingname",
    label: "Marketing name",
  },
  {
    value: "adminname",
    label: "Admin name",
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

export const depositReportFacetFilter = [
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
