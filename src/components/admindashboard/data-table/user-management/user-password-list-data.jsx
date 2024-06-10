import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";

export const userPasswordListColumns = [
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
    accessorKey: "password",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Password" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("password")}</div>,
  },
  {
    accessorKey: "userType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User Type" />
    ),
    cell: ({ row }) => (
      <div className="">
        {row.getValue("userType") == "client" ? <p>Client</p> : <p>IB</p>}
      </div>
    ),
  },
];

export const userPasswordSearchKeys = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "email",
    label: "Email",
  },
];

export const userType = [
  {
    value: "client",
    label: "Client",
  },
  {
    value: "ib",
    label: "IB",
  },
];

export const userPasswordFacetFilter = [
  {
    key: "userType",
    title: "User Type",
    options: userType,
  },
];
