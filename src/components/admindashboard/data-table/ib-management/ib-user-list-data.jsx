import CustomTableActionDropdown from "components/common/data-table/custom-table-action-dropdown";
import CustomTableButton from "components/common/data-table/custom-table-button";
import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";

import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import { Banknote, Eye, Network, Trash } from "lucide-react";
import { useContext, useState } from "react";

export const ibUserListColumns = [
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
    accessorKey: "ibname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IB Name" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("ibname")}</div>,
  },
  {
    accessorKey: "total_commission",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Commission" />
    ),
    cell: ({ row }) => (
      <div className="">{row.getValue("total_commission")}</div>
    ),
  },
  {
    accessorKey: "available_commission",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Available Commission" />
    ),
    cell: ({ row }) => (
      <div className="">{row.getValue("available_commission")}</div>
    ),
  },
  {
    accessorKey: "referralLink",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Referral Link" />
    ),
    cell: ({ row }) => {
      const [copied, setCopied] = useState(false);

      const handleCopy = async (text) => {
        if ("clipboard" in navigator) {
          navigator.clipboard.writeText(text);
          setCopied(true);
        }
      };
      return (
        <div className="">
          <CustomTableButton
            onClick={() => handleCopy(row.getValue("referralLink"))}
            className="bg-primary text-btntext hover:text-"
          >
            {copied ? "Copied!" : "Copy"}
          </CustomTableButton>
        </div>
      );
    },
  },
  {
    accessorKey: "marketingname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Marketing Name" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("marketingname")}</div>,
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => {
      const { theme } = useContext(ThemeContext);
      return (
        <CustomTableActionDropdown
          data={[
            {
              name: "View Levels",
              icon: (
                <>
                  <Eye size={15} />
                </>
              ),
              type: "",
              customClass: "",
              link: "",
            },
            {
              name: "View Commission",
              icon: (
                <>
                  <Banknote size={15} />
                </>
              ),
              type: "",
              customClass: "",
              link: "",
            },
            {
              name: "Tree Chart",
              icon: (
                <>
                  <Network size={15} />
                </>
              ),
              type: "",
              customClass: "",
              link: "/admin/ibmanagment/treetest/" + row.getValue("id"),
            },
          ]}
          theme={theme}
          customWidth="w-[190px]"
        />
      );
    },
  },
];

export const ibUserSearchKeys = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "email",
    label: "Email",
  },
  {
    value: "ibname",
    label: "IB Name",
  },
  {
    value: "marketingname",
    label: "Marketing Name",
  },
];
