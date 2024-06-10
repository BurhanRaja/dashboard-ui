import CustomTableActionDropdown from "components/common/data-table/custom-table-action-dropdown";
import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import { Edit2 } from "lucide-react";

export const ibCommissionGroupListColumns = [
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
    accessorKey: "groupname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Plan Name" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("groupname")}</div>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "level1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Level-1 Commission" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("level1")}</div>,
  },
  {
    accessorKey: "level2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Level-2 Commission" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("level2")}</div>,
  },
  {
    accessorKey: "level3",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Level-3 Commission" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("level3")}</div>,
  },
  {
    accessorKey: "level4",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Level-4 Commission" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("level4")}</div>,
  },
  {
    accessorKey: "level5",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Level-5 Commission" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("level5")}</div>,
  },
  {
    accessorKey: "level6",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Level-6 Commission" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("level6")}</div>,
  },
  {
    accessorKey: "level7",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Level-7 Commission" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("level7")}</div>,
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

export const ibCommissionGroupSearchKeys = [
  {
    value: "planname",
    label: "Plan Name",
  },
];

export const groups = [
  {
    value: "Mini",
    label: "Mini",
  },
];

export const ibCommissionGroupFaceFilter = [
  {
    key: "groupname",
    title: "Group",
    options: groups,
  },
];
