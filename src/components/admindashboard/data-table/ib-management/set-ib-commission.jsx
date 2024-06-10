import CustomTableActionDropdown from "components/common/data-table/custom-table-action-dropdown";
import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import { Edit2 } from "lucide-react";

export const setIBCommissionListColumns = [
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
    accessorKey: "planname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Plan Name" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("planname")}</div>,
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
    cell: ({ row }) => (
      <CustomTableActionDropdown
        data={[
          {
            name: "Edit",
            icon: (
              <>
                <Edit2 size={15} />
              </>
            ),
            type: "normal",
            link: "",
            customClass: "",
          },
        ]}
      />
    ),
  },
];

export const setIBCommissionSearchKeys = [
  {
    value: "planname",
    label: "Plan Name",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "email",
    label: "Email",
  },
];
