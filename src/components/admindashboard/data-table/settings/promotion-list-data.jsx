import CustomTableActionDropdown from "components/common/data-table/custom-table-action-dropdown";
import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import { Edit2, ShieldCheck, ShieldX } from "lucide-react";

export const promotionListColumns = [
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
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => (
      <div className="">
        {row.getValue("type") == "text" ? "Text" : "Image"}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => (
      <div className="">
        {row.getValue("type") == "image" && (
          <div className="p-2  flex justify-center">
            <img
              src="/logotechysquad-dark.png"
              className="bg-white"
              width={80}
            />
          </div>
        )}
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("description")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div className="">
        {row.getValue("status") == "active" ? (
          <p className="text-success">Active</p>
        ) : (
          <p className="text-warning">Inactive</p>
        )}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CreatedAt" />
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
        <CustomTableActionDropdown
          data={[
            {
              name: row.getValue("status") == "active" ? "Inacive" : "Active",
              icon: (
                <>
                  {row.getValue("status") == "active" ? (
                    <ShieldX size={15} />
                  ) : (
                    <ShieldCheck size={15} />
                  )}
                </>
              ),
              type: "normal",
              link: "",
              customClass:
                row.getValue("status") == "active"
                  ? "hover:bg-warning"
                  : "hover:bg-success",
            },
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
      </div>
    ),
  },
];

export const type = [
  {
    value: "image",
    label: "Image",
  },
  {
    value: "text",
    label: "Text",
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

export const promotionListFacetFilter = [
  {
    key: "type",
    title: "Type",
    options: type,
  },
  {
    key: "status",
    title: "Status",
    options: status,
  },
];
