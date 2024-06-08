import ThemeContext from "context/theme-context";
import {
  Users,
  Settings,
  LayoutGrid,
  FolderKanban,
  Gift,
  Network,
  Boxes,
  BadgeDollarSign,
  Target,
  Mail,
  Newspaper,
  Bell,
  Trophy,
  LineChart,
  TrendingDown,
  Ticket,
  Shield,
} from "lucide-react";
import { useContext } from "react";

export function getMenuList(pathname) {
  const { theme } = useContext(ThemeContext);

  return [
    {
      menus: [
        {
          href: "/admin/dashboard",
          label: "Dashboard",
          active: pathname.includes("/admin/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      menus: [
        {
          href: "/admin/managementdashboard",
          label: "Management Dashboard",
          active: pathname.includes("/admin/managementdashboard"),
          icon: FolderKanban,
          submenus: [],
        },
      ],
    },
    {
      // groupLabel: "",
      menus: [
        {
          href: "",
          label: "User Management",
          active: pathname.includes("/admin/usermanagement"),
          icon: Users,
          submenus: [
            {
              href: "/admin/usermanagement/adduser",
              label: "Add User",
              active: pathname == "/admin/usermanagement/adduser",
            },
            {
              href: "/admin/usermanagement/userlist",
              label: "User List",
              active: pathname == "/admin/usermanagement/userlist",
            },
            {
              href: "/admin/usermanagement/createmt5account",
              label: "Create MT5 Account",
              active: pathname === "/admin/usermanagement/createmt5account",
            },
            {
              href: "/admin/usermanagement/mt5userlist",
              label: "MT5 User List",
              active: pathname === "/admin/usermanagement/mt5userlist",
            },
            {
              href: "/admin/usermanagement/followuplist",
              label: "Follow Up List",
              active: pathname === "/admin/usermanagement/followuplist",
            },
            {
              href: "/admin/usermanagement/pendingdocumentlist",
              label: "Pending Document List",
              active: pathname === "/admin/usermanagement/pendingdocumentlist",
            },
            {
              href: "/admin/usermanagement/approveddocumentlist",
              label: "Approved Document List",
              active: pathname === "/admin/usermanagement/approveddocumentlist",
            },
            {
              href: "/admin/usermanagement/uploaduserdocument",
              label: "Upload User Document",
              active: pathname === "/admin/usermanagement/uploaduserdocument",
            },
            {
              href: "/admin/usermanagement/addbankdetails",
              label: "Add Bank Details",
              active: pathname === "/admin/usermanagement/addbankdetails",
            },
            {
              href: "/admin/usermanagement/bankdetailslist",
              label: "Bank Details List",
              active: pathname === "/admin/usermanagement/bankdetailslist",
            },
            {
              href: "/admin/usermanagement/userpasswordList",
              label: "User Password List",
              active: pathname === "/admin/usermanagement/userpasswordList",
            },
            {
              href: "/admin/usermanagement/changeuserpassword",
              label: "Change User Password",
              active: pathname === "/admin/usermanagement/changeuserpassword",
            },
            {
              href: "/admin/usermanagement/addexistingclient",
              label: "Add Existing Client",
              active: pathname === "/admin/usermanagement/addexistingclient",
            },
            {
              href: "/admin/usermanagement/changemt5password",
              label: "Change MT5 Password",
              active: pathname === "/admin/usermanagement/changemt5password",
            },
            {
              href: "/admin/usermanagement/updatemt5leverage",
              label: "Update MT5 Leverage",
              active: pathname === "/admin/usermanagement/updatemt5leverage",
            },
            {
              href: "/admin/usermanagement/resendemailverification",
              label: "Resend Verification Mail",
              active:
                pathname === "/admin/usermanagement/resendemailverification",
            },
            {
              href: "/admin/usermanagement/resendmt5accountdetails",
              label: "Resend MT5 Data Mail",
              active:
                pathname === "/admin/usermanagement/resendmt5accountdetails",
            },
          ],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "Bonus",
          active: pathname.includes("/admin/bonus"),
          icon: Gift,
          submenus: [
            {
              href: "/admin/bonus/givebonus",
              label: "Give Bonus",
              active: pathname === "/admin/bonus/givebonus",
            },
            {
              href: "/admin/bonus/removebonus",
              label: "Remove Bonus",
              active: pathname === "/admin/bonus/removebonus",
            },
            {
              href: "/admin/bonus/bonuslist",
              label: "Bonus List",
              active: pathname === "/admin/bonus/bonuslist",
            },
          ],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "IB Management",
          active: pathname.includes("/admin/ibmanagment"),
          icon: Network,
          submenus: [
            {
              href: "/admin/ibmanagment/ibuserlist",
              label: "IB Users",
              active:
                pathname === "/admin/ibmanagment/ibuserlist" ||
                pathname.includes("/admin/ibmanagment/treetest"),
            },
            {
              href: "/admin/ibmanagment/ibrequestlist",
              label: "IB Request",
              active: pathname === "/admin/ibmanagment/ibrequestlist",
            },
            {
              href: "/admin/ibmanagment/ibplanlist",
              label: "IB Plan",
              active: pathname === "/admin/ibmanagment/ibplanlist",
            },
            {
              href: "/posts/new",
              label: "Commission Group",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "Set IB Commission",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "Move Client to IB",
              active: pathname === "/posts/new",
            },
          ],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "Group Management",
          active: pathname.includes("/admin/groupmanagement"),
          icon: Boxes,
          submenus: [
            {
              href: "/admin/groupmanagement/addgroup",
              label: "Add Group",
              active: pathname === "/admin/groupmanagement/addgroup",
            },
            {
              href: "/posts/new",
              label: "Group List",
              active: pathname === "/posts/new",
            },
            {
              href: "/admin/groupmanagement/updatemt5group",
              label: "Update MT5 Group",
              active: pathname === "/admin/groupmanagement/updatemt5group",
            },
          ],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "Transaction",
          active: pathname.includes("/admin/transaction"),
          icon: BadgeDollarSign,
          submenus: [
            {
              href: "/admin/transaction/clientdeposit",
              label: "Client Deposit",
              active: pathname === "/admin/transaction/clientdeposit",
            },
            {
              href: "/admin/transaction/clientwithdraw",
              label: "Client Withdraw",
              active: pathname === "/admin/transaction/clientwithdraw",
            },
            {
              href: "/admin/transaction/ibwithdraw",
              label: "IB Withdraw",
              active: pathname === "/admin/transaction/ibwithdraw",
            },
            {
              href: "/admin/transaction/internaltransfer",
              label: "Internal Transfer",
              active: pathname === "/admin/transaction/internaltransfer",
            },
            {
              href: "/posts/new",
              label: "Pending Deposit",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "Pending Withdraw",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "Pending IB Withdraw",
              active: pathname === "/posts/new",
            },
          ],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "Marketing",
          active: pathname.includes("/admin/marketing"),
          icon: Target,
          submenus: [
            {
              href: "/admin/marketing/addmarketing",
              label: "Add Marketing",
              active: pathname === "/admin/marketing/addmarketing",
            },
            {
              href: "/posts/new",
              label: "Marketing List",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "Incentive Report",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "Marketing Withdraw Report",
              active: pathname === "/posts/new",
            },
          ],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "Send Mail",
          active: pathname.includes("/admin/dashboard/user"),
          icon: Mail,
          submenus: [],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "News",
          active: pathname.includes("/admin/dashboard/user"),
          icon: Newspaper,
          submenus: [],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "Notifications",
          active: pathname.includes("/admin/dashboard/user"),
          icon: Bell,
          submenus: [
            {
              href: "/posts",
              label: "Unread Notifications",
              active: pathname === "/posts",
            },
            {
              href: "/posts/new",
              label: "Read Notifications",
              active: pathname === "/posts/new",
            },
          ],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "Rewards Management",
          active: pathname.includes("/admin/dashboard/user"),
          icon: Trophy,
          submenus: [
            {
              href: "/posts",
              label: "Reward List",
              active: pathname === "/posts",
            },
            {
              href: "/posts/new",
              label: "Add Rewards",
              active: pathname === "/posts/new",
            },
          ],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "All Reports",
          active: pathname.includes("/admin/dashboard/user"),
          icon: LineChart,
          submenus: [
            {
              href: "/posts",
              label: "Deposit Report",
              active: pathname === "/posts",
            },
            {
              href: "/posts/new",
              label: "Withdraw Report",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "IB Withdraw Report",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "Internal Transfer Report",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "Position Report",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "History Report",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "Login Activity",
              active: pathname === "/posts/new",
            },
          ],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "Risk Management Reports",
          active: pathname.includes("/admin/dashboard/user"),
          icon: TrendingDown,
          submenus: [
            {
              href: "/posts",
              label: "Profit Risking",
              active: pathname === "/posts",
            },
            {
              href: "/posts/new",
              label: "Scalping Trade Report",
              active: pathname === "/posts/new",
            },
          ],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "Tickets",
          active: pathname.includes("/admin/dashboard/user"),
          icon: Ticket,
          submenus: [],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "Settings",
          active: pathname.includes("/admin/dashboard/user"),
          icon: Settings,
          submenus: [
            {
              href: "/posts",
              label: "Promotion List",
              active: pathname === "/posts",
            },
            {
              href: "/posts/new",
              label: "Default Settings",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "System Settings",
              active: pathname === "/posts/new",
            },
            {
              href: "/posts/new",
              label: "Payment Settings",
              active: pathname === "/posts/new",
            },
          ],
        },
      ],
    },
    {
      menus: [
        {
          href: "",
          label: "Sub Admin",
          active: pathname.includes("/admin/subadmin"),
          icon: Shield,
          submenus: [
            {
              href: "/admin/subadmin/createsubadmin",
              label: "Create Sub Admin",
              active: pathname === "/admin/subadmin/createsubadmin",
            },
            {
              href: "/posts/new",
              label: "Sub Admin List",
              active: pathname === "/posts/new",
            },
          ],
        },
      ],
    },
  ];
}
