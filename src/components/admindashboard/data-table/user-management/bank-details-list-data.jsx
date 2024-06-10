import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import { Button } from "components/ui/button";
import { Check, X } from "lucide-react";

export const bankDetailsListColumns = [
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
    accessorKey: "accountname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account Name" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("accountname")}</div>,
  },
  {
    accessorKey: "accountnumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account No." />
    ),
    cell: ({ row }) => <div className="">{row.getValue("accountnumber")}</div>,
  },
  {
    accessorKey: "ifsccode",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IFSC/Swift Code" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("ifsccode")}</div>,
  },
  {
    accessorKey: "iban",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IBAN No." />
    ),
    cell: ({ row }) => <div className="">{row.getValue("iban")}</div>,
  },
  {
    accessorKey: "bankname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bank Name" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("bankname")}</div>,
  },
  {
    accessorKey: "bankaddress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bank Address" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("bankaddress")}</div>,
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bank Address" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("country")}</div>,
  },
  {
    accessorKey: "bookbank",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Book Bank" />
    ),
    cell: ({ row }) => (
      <div className="">
        <div className="p-2 bg-white">
          <img src="/logotechysquad-dark.png" width={80} />
        </div>
      </div>
    ),
  },
  {
    accessorKey: "comment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Comment" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("comment")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue("status") == "pending" ? (
          <p className="text-warning">Pending</p>
        ) : row.getValue("status") == "approved" ? (
          <p className="text-success">Approved</p>
        ) : (
          <p className="text-danger">Rejected</p>
        )}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("createdAt")}</div>,
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => {
      let status = row.getValue("status");
      if (status == "pending") {
        return (
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Button className="bg-secondary p-2 h-7">
                <Check size={18} className={""} />
              </Button>
            </div>
            <div>
              <Button className="bg-primary p-2 h-7">
                <X size={18} className={""} />
              </Button>
            </div>
          </div>
        );
      } else {
        return <></>;
      }
    },
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

export const bankDetailsSearchKeys = [
  {
    value: "accountname",
    label: "Account Name",
  },
  {
    value: "accountnumber",
    label: "Account No.",
  },
  {
    value: "ifsccode",
    label: "IFSC/Swift Code",
  },
  {
    value: "iban",
    label: "IBAN No.",
  },
  {
    value: "bankname",
    label: "Bank Name",
  },
];

export const bankDetailsFacetFilter = [
  {
    key: "status",
    title: "Status",
    options: status,
  },
];
