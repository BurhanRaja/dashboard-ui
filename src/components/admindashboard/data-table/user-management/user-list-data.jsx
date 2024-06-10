import CustomTableActionDropdown from "components/common/data-table/custom-table-action-dropdown";
import { DataTableColumnHeader } from "components/common/data-table/data-table-column-header";
import { Button } from "components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import { Edit2, Eye, MoreHorizontal, Settings, Trash } from "lucide-react";
import { useContext } from "react";

export const userListColumns = [
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
    cell: ({ row }) => (
      <div className="">
        {row.getValue("phoneCode") + row.getValue("phone")}
      </div>
    ),
  },
  {
    accessorKey: "phoneCode",
    header: null,
    cell: null,
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("country")}</div>,
  },
  {
    accessorKey: "wallet_balance",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Wallet Balance" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("wallet_balance")}</div>,
  },
  {
    accessorKey: "ibname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IB Name" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("ibname")}</div>,
  },
  {
    accessorKey: "marketingname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Marketing Name" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("marketingname")}</div>,
  },
  {
    accessorKey: "login_verified",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email Verified" />
    ),
    cell: ({ row }) => (
      <div className="">
        {row.getValue("login_verified") == "not-verified" ? (
          <Button className="bg-primary text-white hover:bg-secondary text-xs h-7 px-2 py-3">
            Verify
          </Button>
        ) : row.getValue("login_verified") == "verified" ? (
          <p className="text-success">Verified</p>
        ) : (
          <p className="text-danger">Blocked</p>
        )}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "kyc_verified",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="KYC Verified" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue("kyc_verified") == "not-uploaded" ? (
          <p className="">Not Uploaded</p>
        ) : row.getValue("kyc_verified") == "pending" ? (
          <p className="text-warning">Pending</p>
        ) : row.getValue("kyc_verified") == "approved" ? (
          <p className="text-success">Approved</p>
        ) : (
          <p className="text-danger">Rejected</p>
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
      <DataTableColumnHeader column={column} title="Registration Date" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("createdAt")}</div>,
  },
  {
    accessorKey: "otp_enabled",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Google 2FA" />
    ),
    cell: ({ row }) => (
      <div className="">
        {row.getValue("otp_enabled") == 1 ? (
          <Button className="bg-primary text-white hover:bg-secondary text-xs h-7 px-2 py-3">
            Disable
          </Button>
        ) : (
          <p className="">Not Enabled</p>
        )}
      </div>
    ),
  },
  {
    accessorKey: "ib_status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IB Status" />
    ),
    cell: ({ row }) => (
      <div className="">
        {row.getValue("ib_status") == "pending" ? (
          <Button className="bg-primary text-white hover:bg-secondary text-xs h-7 px-2 py-3">
            Promote to IB
          </Button>
        ) : row.getValue("ib_status") == "approved" ? (
          <p className="text-success">Already IB</p>
        ) : (
          <p className="text-danger">Rejected</p>
        )}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "Action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => {
      const { theme } = useContext(ThemeContext);
      return (
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
              link: "",
              customClass: "",
            },
            {
              name: "Details",
              icon: (
                <>
                  <Eye size={15} />
                </>
              ),
              type: "normal",
              link: "",
              customClass: "",
            },
            {
              name: "Settings",
              icon: (
                <>
                  <Settings size={15} />
                </>
              ),
              type: "normal",
              link: `/admin/usermanagement/usersettings/${row.getValue("id")}`,
              customClass: "",
            },
            {
              name: "",
              icon: <></>,
              type: "seperator",
              link: "",
              customClass: "",
            },
            {
              name: "Delete",
              icon: (
                <>
                  <Trash size={15} />
                </>
              ),
              type: "normal",
              link: "",
              customClass: "hover:bg-danger",
            },
          ]}
        />
      );
    },
  },
];

export const searchKeys = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "email",
    label: "Email",
  },
  {
    value: "ibanme",
    label: "IB Name",
  },
  {
    value: "marketingname",
    label: "Marketing Name",
  },
];

export const loginVerified = [
  {
    value: "not-verified",
    label: "Not Verified",
  },
  {
    value: "verified",
    label: "Verified",
  },
  {
    value: "blocked",
    label: "Blocked",
  },
];

export const kycVerified = [
  {
    value: "not-uploaded",
    label: "Not Uploaded",
  },
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "approved",
    label: "Approved",
  },
  {
    value: "rejected",
    label: "Rejected",
  },
];

export const ibstatus = [
  {
    value: "pending",
    label: "Pending Request",
  },
  {
    value: "approved",
    label: "Already IB",
  },
  {
    value: "rejected",
    label: "Request Rejected",
  },
];

export const facetFilter = [
  {
    key: "login_verified",
    title: "Email Verified",
    options: loginVerified,
  },
  {
    key: "kyc_verified",
    title: "KYC Verified",
    options: kycVerified,
  },
  {
    key: "ib_status",
    title: "IB Status",
    options: ibstatus,
  },
];
