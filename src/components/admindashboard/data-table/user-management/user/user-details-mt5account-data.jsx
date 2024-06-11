import CustomTableButton from "components/common/data-table/custom-table-button";
import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import { Button } from "components/ui/button";

export const userDetailsMt5Columns = [
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
        <CustomTableButton className="">Details</CustomTableButton>
      </div>
    ),
  },
];

export const userDetailsMt5SearchKeys = [
  {
    value: "account_no",
    label: "MT5 ID",
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

export const userDetailsMt5FacetFilter = [
  {
    key: "groupname",
    title: "Group",
    options: groupName,
  },
];
