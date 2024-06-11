import AlertCheck from "components/common/alert-check";
import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import { Button } from "components/ui/button";
import { Check, X } from "lucide-react";

export const ibRequestListColumns = [
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
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("country")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Registration Date" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("createdAt")}</div>,
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => {
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
              description={"You are about to Approve the IB Request."}
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
              description={"You are about to Reject the IB Request."}
            />
          </div>
        </div>
      );
    },
  },
];

export const ibRequestSearchKeys = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "email",
    label: "Email",
  },
];
