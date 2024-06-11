import AlertCheck from "components/common/alert-check";
import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import { Button } from "components/ui/button";
import { Check, X } from "lucide-react";
import { useState } from "react";

export const ibwithdrawListColumns = [
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
    accessorKey: "withdrawTo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Withdraw To" />
    ),
    cell: ({ row }) => {
      return <div className="">{row.getValue("withdrawTo")}</div>;
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
    accessorKey: "note",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
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
      const [checkOpen, setCheckOpen] = useState(false);
      const [xOpen, setXOpen] = useState(false);

      if (status == "pending") {
        return (
          <div className="grid grid-cols-2 gap-2">
            <div>
              <AlertCheck
                isOpen={checkOpen}
                setOpen={(val) => setCheckOpen(val)}
                executeButton={
                  <Button className="bg-primary hover:bg-secondary">
                    Approve
                  </Button>
                }
                title={"Are you Sure?"}
                description={"You are about to Approve an IB Withdraw Request."}
              />
              <Button
                className="bg-secondary p-2 h-7"
                onClick={() => setCheckOpen(true)}
              >
                <Check size={18} className={""} />
              </Button>
            </div>
            <div>
              <Button
                className="bg-primary p-2 h-7"
                onClick={() => setXOpen(true)}
              >
                <X size={18} className={""} />
              </Button>
              <AlertCheck
                isOpen={xOpen}
                setOpen={(val) => setXOpen(val)}
                executeButton={
                  <Button className="bg-primary hover:bg-secondary">
                    Reject
                  </Button>
                }
                title={"Are you Sure?"}
                description={"You are about to Reject an IB Withdraw Request."}
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

export const ibWithdrawListSearchKeys = [
  {
    value: "nameEmail",
    label: "Name/Email",
  },
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
    value: "mt5",
    label: "MT5 Account",
  },
  {
    value: "crypto",
    label: "crypto",
  },
];

export const ibWithdrawListFacetFilter = [
  {
    key: "paymentmethod",
    title: "Payment Method",
    options: paymentmethod,
  },
];
