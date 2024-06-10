import CustomTableActionDropdown from "components/common/data-table/custom-table-action-dropdown";
import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import { Edit2 } from "lucide-react";

export const groupListColumns = [
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
    accessorKey: "mtgroup",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="MT Group" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("mtgroup")}</div>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return (
        <div className="">
          {row.getValue("status") == "active" ? (
            <p className="text-success">Active</p>
          ) : (
            <p className="text-warning">Inactive</p>
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
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

export const groupSearchKeys = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "mtgroup",
    label: "MT Group",
  },
];

export const status = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "inactive",
    label: "Inactive",
  },
];

export const groupFaceFilter = [
  {
    key: "status",
    title: "Status",
    options: status,
  },
];
