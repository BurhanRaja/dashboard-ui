import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import { Button } from "components/ui/button";

export const mt5UserListColumns = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => {
      console.log(row.getValue("account_no"));
      return <div className="">{row.getValue("id")}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "account_no",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="MT5 ID" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("account_no")}</div>,
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
    accessorKey: "investorpassword",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Investor Password" />
    ),
    cell: ({ row }) => (
      <div className="">{row.getValue("investorpassword")}</div>
    ),
  },
  {
    accessorKey: "mainpassword",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Main Password" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("mainpassword")}</div>,
  },
  {
    accessorKey: "groupname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Group" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("groupname")}</div>,
  },
  {
    accessorKey: "leverage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Leverage" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("leverage")}</div>,
  },
  {
    accessorKey: "marketingname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Marketing Name" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("marketingname")}</div>,
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
    cell: ({ row }) => (
      <div className="">
        <Button className="bg-primary text-white hover:bg-secondary text-xs h-7 px-2 py-3">
          Details
        </Button>
      </div>
    ),
  },
];

export const mt5UserListSearchKeys = [
  {
    value: "account_no",
    label: "MT5 ID",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "email",
    label: "Email",
  },
  {
    value: "marketingname",
    label: "Marketing Name",
  },
];

export const groupName = [
  {
    value: "Mini",
    label: "Mini",
  },
  {
    value: "Micro",
    label: "Micro",
  },
];

export const mt5UserListFacetFilter = [
  {
    key: "groupname",
    title: "Group",
    options: groupName,
  },
];
