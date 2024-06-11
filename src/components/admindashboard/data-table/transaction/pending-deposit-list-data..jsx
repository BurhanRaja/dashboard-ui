import AlertCheck from "components/common/alert-check";
import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import { Button } from "components/ui/button";
import { Check, X } from "lucide-react";

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
      return <div className="">{row.getValue("depositproof")}</div>;
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
              <AlertCheck
                button={
                  <Button className="bg-secondary p-2 h-7">
                    <Check size={18} className={""} />
                  </Button>
                }
                executeButton={
                  <Button className="bg-primary hover:bg-secondary">Yes</Button>
                }
                title={"Are you Sure?"}
                description={"You are about to Approve a Deposit Request."}
              />
            </div>
            <div>
            <AlertCheck
                button={
                  <Button className="bg-primary p-2 h-7">
                  <X size={18} className={""} />
                </Button>
                }
                executeButton={
                  <Button className="bg-primary hover:bg-secondary">Yes</Button>
                }
                title={"Are you Sure?"}
                description={"You are about to Reject a Deposit Request."}
              />
            </div>
          </div>
        );
      } else {
        return <></>;
      }
    },
  },
];

export const pendingDepositSearchKeys = [
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

export const pendingDepositFacetFilter = [
  {
    key: "paymentmethod",
    title: "Payment Method",
    options: paymentmethod,
  },
];
