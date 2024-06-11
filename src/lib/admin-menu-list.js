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
              active:
                pathname == "/admin/usermanagement/userlist" ||
                pathname.includes("/admin/usermanagement/usersettings") ||
                pathname.includes("/admin/usermanagement/edituser") ||
                pathname.includes("/admin/usermanagement/userdetails"),
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
          active: pathname.includes("/admin/ibmanagement"),
          icon: Network,
          submenus: [
            {
              href: "/admin/ibmanagement/ibuserlist",
              label: "IB Users",
              active:
                pathname === "/admin/ibmanagement/ibuserlist" ||
                pathname.includes("/admin/ibmanagement/treetest"),
            },
            {
              href: "/admin/ibmanagement/ibrequestlist",
              label: "IB Request",
              active: pathname === "/admin/ibmanagement/ibrequestlist",
            },
            {
              href: "/admin/ibmanagement/ibplanlist",
              label: "IB Plan",
              active:
                pathname === "/admin/ibmanagement/ibplanlist" ||
                pathname === "/admin/ibmanagement/addibplan",
            },
            {
              href: "/admin/ibmanagement/ibcommissiongroup",
              label: "Commission Group",
              active:
                pathname === "/admin/ibmanagement/ibcommissiongroup" ||
                pathname === "/admin/ibmanagement/addibcommissiongroup" ||
                pathname === "/admin/ibmanagement/editibcommissiongroup",
            },
            {
              href: "/admin/ibmanagement/setibcommission",
              label: "Set IB Commission",
              active:
                pathname === "/admin/ibmanagement/setibcommission" ||
                pathname === "/admin/ibmanagement/addsetibcommission" ||
                pathname === "/admin/ibmanagement/editsetibcommission",
            },
            {
              href: "/admin/ibmanagement/moveclienttoib",
              label: "Move Client to IB",
              active: pathname === "/admin/ibmanagement/moveclienttoib",
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
              href: "/admin/groupmanagement/grouplist",
              label: "Group List",
              active: pathname === "/admin/groupmanagement/grouplist",
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
              href: "/admin/transaction/pendingdepositlist",
              label: "Pending Deposit",
              active: pathname === "/admin/transaction/pendingdepositlist",
            },
            {
              href: "/admin/transaction/pendingwithdrawlist",
              label: "Pending Withdraw",
              active: pathname === "/admin/transaction/pendingwithdrawlist",
            },
            {
              href: "/admin/transaction/pendingibwithdrawlist",
              label: "Pending IB Withdraw",
              active: pathname === "/admin/transaction/pendingibwithdrawlist",
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
              href: "/admin/marketing/marketinglist",
              label: "Marketing List",
              active: pathname === "/admin/marketing/marketinglist",
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
          href: "/admin/sendmail",
          label: "Send Mail",
          active: pathname.includes("/admin/sendmail"),
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
          active: pathname.includes("/admin/report"),
          icon: LineChart,
          submenus: [
            {
              href: "/admin/report/depositreport",
              label: "Deposit Report",
              active: pathname === "/admin/report/depositreport",
            },
            {
              href: "/admin/report/withdrawreport",
              label: "Withdraw Report",
              active: pathname === "/admin/report/withdrawreport",
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
          active: pathname.includes("/admin/settings"),
          icon: Settings,
          submenus: [
            {
              href: "/admin/settings/promotionlist",
              label: "Promotion List",
              active: pathname === "/admin/settings/promotionlist",
            },
            {
              href: "/admin/settings/defaultsettings",
              label: "Default Settings",
              active: pathname === "/admin/settings/defaultsettings",
            },
            {
              href: "/admin/settings/systemsettings",
              label: "System Settings",
              active: pathname === "/admin/settings/systemsettings",
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
