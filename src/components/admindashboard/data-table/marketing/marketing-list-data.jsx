import CustomTableActionDropdown from "components/common/data-table/custom-table-action-dropdown";
import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import ThemeContext from "context/theme-context";
import { Edit2 } from "lucide-react";
import { useContext } from "react";

export const marketingListColumns = [
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
    accessorKey: "password",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Password" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("password")}</div>,
  },
  {
    accessorKey: "netdeposit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="New Deposit" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("netdeposit")}</div>,
  },
  {
    accessorKey: "incentive",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Incentive" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("incentive")}</div>,
  },
  {
    accessorKey: "lots",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lots" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("lots")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("createdAt")}</div>,
  },
  {
    accessorKey: "Action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => {
      const { theme } = useContext(ThemeContext);
      return (
        <div className="grid grid-cols-2 gap-2">
          <CustomTableActionDropdown
            theme={theme}
            data={[
              {
                name: "Edit",
                icon: (
                  <>
                    <Edit2 size={15} />
                  </>
                ),
                type: "normal",
                link: `/admin/marketing/editmarketing/${row.getValue("id")}`,
                customClass: "",
              },
            ]}
          />
        </div>
      );
    },
  },
];

export const marketingListSearchKeys = [
    {
        value: "name",
        label: "Name",
    },
    {
        value: "email",
        label: "Email",
    },
]
