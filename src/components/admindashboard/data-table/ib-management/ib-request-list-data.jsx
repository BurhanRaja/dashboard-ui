import AlertCheck from "components/common/alert-check";
import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import { Button } from "components/ui/button";
import { Check, X } from "lucide-react";
import { useState } from "react";

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
      const [checkOpen, setCheckOpen] = useState(false);
      const [XOpen, setXOpen] = useState(false);
      
      return (
        <div className="grid grid-cols-2 gap-2">
          <div>
            <AlertCheck
            isOpen={checkOpen}
            setOpen={(val) => setCheckOpen(val)}
              executeButton={
                <Button className="bg-primary hover:bg-secondary">Approve</Button>
              }
              title={"Are you Sure?"}
              description={"You are about to Approve the IB Request."}
            />
            <Button className="bg-secondary p-2 h-7" onClick={() => setCheckOpen(true)}>
              <Check size={18} className={""} />
            </Button>
          </div>
          <div>
            <AlertCheck
            isOpen={XOpen}
            setOpen={(val) => setXOpen(val)}
              executeButton={
                <Button className="bg-primary hover:bg-secondary">Reject</Button>
              }
              title={"Are you Sure?"}
              description={"You are about to Reject the IB Request."}
            />
            <Button className="bg-primary p-2 h-7" onClick={() => setXOpen(true)}>
              <X size={18} className={""} />
            </Button>
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
