import React, { useContext } from "react";
import { Button } from "components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import AdminCard from "components/admindashboard/common/admin-form";
import MainDataTable from "components/common/data-table/main-table";
import {
  userDetailDepositColumns,
  userDetailDepositFacetFilter,
  userDetailDepositSearchKeys,
} from "components/admindashboard/data-table/user-management/user/user-details-deposit-data";
import {
  userDetailsWithdrawColumns,
  userDetailsWithdrawFacetFilter,
  userDetailsWithdrawSearchKeys,
} from "components/admindashboard/data-table/user-management/user/user-details-withdraw-data";
import {
  userDetailsMt5Columns,
  userDetailsMt5FacetFilter,
  userDetailsMt5SearchKeys,
} from "components/admindashboard/data-table/user-management/user/user-details-mt5account-data";
import {
  userDetailsBankFacetFilter,
  userDetailsBankListColumns,
  userDetailsBankSearchKeys,
} from "components/admindashboard/data-table/user-management/user/user-details-bank-details-data";
import {
  userDetailsLoginActivityColumns,
  userDetailsLoginactivitySearchKeys,
} from "components/admindashboard/data-table/user-management/user/user-details-login-activity-data";
import { cn } from "lib/utils";
import ThemeContext from "context/theme-context";
import DetailsCard from "components/common/details-card";

const UserDetails = () => {
  const depositList = [
    {
      // name: "Burhanuddin Raja",
      // email: "burhanuddin@techysquad.com",
      amount: 100.98,
      status: 0,
      paymentmethod: "bank",
      paymentid: "2iej28jsi2js",
      note: "Test Note",
      createdAt: "2024-05-06",
      depositTo: 9827492,
      marketingname: "",
      adminname: "",
      depositproof: "",
    },
    {
      // name: "Bijal Makvana",
      // email: "bijal@techysquad.com",
      amount: 390.48,
      status: 1,
      paymentmethod: "cash",
      paymentid: "",
      note: "Test Note",
      createdAt: "2024-05-06",
      depositTo: "wallet",
      marketingname: "",
      adminname: "",
      depositproof: "",
    },
  ];

  const withdrawList = [
    {
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
      amount: 100.98,
      status: 1,
      paymentmethod: "bank",
      withdrawFrom: 9827492,
      note: "Test Note",
      createdAt: "2024-05-06",
      withdrawTo: "2iej28jsi2js",
      marketingname: "",
      adminname: "",
      admincomment: "",
    },
    {
      name: "Bijal Makvana",
      email: "bijal@techysquad.com",
      amount: 390.48,
      status: 0,
      paymentmethod: "cash",
      withdrawFrom: 8927482,
      note: "Test Note",
      createdAt: "2024-05-06",
      withdrawTo: "wallet",
      marketingname: "",
      adminname: "",
      admincomment: "",
    },
  ];

  const accounts = [
    {
      id: 1,
      account_no: 91452206,
      name: "Akash Sanjay Vadar",
      email: "akashwadar78@gmail.com",
      investorpassword: "#7p$YQ92m",
      mainpassword: "4WC7y&!r1",
      groupname: "Mini",
      leverage: 500,
      createdAt: "2024-06-05",
      marketingname: "",
    },
    {
      id: 1,
      account_no: 91452205,
      name: "Prashant Kumar Vadd",
      email: "prashantvadd640@gmail.com",
      investorpassword: "gW6M8n$4*",
      mainpassword: "25wVi4J$&",
      groupname: "Mini",
      leverage: 500,
      createdAt: "2024-06-05",
      marketingname: "",
    },
    {
      id: 1,
      account_no: 91452204,
      name: "Rohan Ashok Patil",
      email: "rp2331281@gmail.com",
      investorpassword: "#7p$YQ92m",
      mainpassword: "4WC7y&!r1",
      groupname: "ECN",
      leverage: 500,
      createdAt: "2024-06-05",
      marketingname: "",
    },
    {
      id: 1,
      account_no: 91452203,
      name: "Adhik Vishwas Patil",
      email: "adhikpatil99@gmail.com",
      investorpassword: "gW6M8n$4*",
      mainpassword: "25wVi4J$&",
      groupname: "Micro",
      leverage: 500,
      createdAt: "2024-06-05",
      marketingname: "",
    },
  ];

  let bankDetailsList = [
    {
      accountname: "Burhan",
      accountnumber: "97328201",
      bankname: "SBI Bank",
      bankaddress: "Any Address",
      country: "India",
      ifsccode: "3i2rh3iunk3",
      iban: "wqku212quwed",
      bookbank: "",
      comment: "Approved by admin",
      status: 1,
      createdAt: "2024-05-06",
    },
    {
      accountname: "Jignesh",
      accountnumber: "102983842",
      bankname: "SBI Bank",
      bankaddress: "Any Address",
      country: "India",
      ifsccode: "3i2rh3iunk3",
      iban: "wqku212quwed",
      bookbank: "",
      comment: "",
      status: 0,
      createdAt: "2024-05-06",
    },
  ];

  let loginActivityList = [
    {
      id: 1,
      name: "Burhanuddin Raja",
      ipaddress: "132.342.43.134",
      createdAt: "2024-09-21",
    },
  ];

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ContentLayout
        title={"User Details"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Management", link: "#" },
          { name: "User List", link: "/admin/usermanagement/userlist" },
          { name: "User Details", link: "#" },
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <DetailsCard title={"Total Deposit"} count={"$100"} />
          <DetailsCard title={"Total Withdraws"} count={"$100"} />
          <DetailsCard title={"Total MT5 Account"} count={"2"} />
        </div>
        <AdminCard>
          <Tabs defaultValue="deposit" className="w-[100%]">
            <TabsList
              className={cn(
                "grid w-full grid-cols-1 md:grid-cols-3 xl:grid-cols-6 h-13 py-2 px-2",
                theme == "dark" ? "bg-slate-900 text-white" : "bg-slate-100"
              )}
            >
              <TabsTrigger
                value="deposit"
                className={cn(
                  "rounded-md p-2",
                  theme == "dark"
                    ? "data-[state=active]:bg-slate-950"
                    : "data-[state=active]:bg-slate-300"
                )}
              >
                Deposit
              </TabsTrigger>
              <TabsTrigger
                value="withdraw"
                className={cn(
                  "rounded-md p-2",
                  theme == "dark"
                    ? "data-[state=active]:bg-slate-950"
                    : "data-[state=active]:bg-slate-300"
                )}
              >
                Withdraw
              </TabsTrigger>
              <TabsTrigger
                value="account"
                className={cn(
                  "rounded-md p-2",
                  theme == "dark"
                    ? "data-[state=active]:bg-slate-950"
                    : "data-[state=active]:bg-slate-300"
                )}
              >
                MT5 Account
              </TabsTrigger>
              <TabsTrigger
                value="bankdetails"
                className={cn(
                  "rounded-md p-2",
                  theme == "dark"
                    ? "data-[state=active]:bg-slate-950"
                    : "data-[state=active]:bg-slate-300"
                )}
              >
                Bank Details
              </TabsTrigger>
              <TabsTrigger
                value="loginactivity"
                className={cn(
                  "rounded-md p-2",
                  theme == "dark"
                    ? "data-[state=active]:bg-slate-950"
                    : "data-[state=active]:bg-slate-300"
                )}
              >
                Login Activity
              </TabsTrigger>
              <TabsTrigger
                value="referral"
                className={cn(
                  "rounded-md p-2",
                  theme == "dark"
                    ? "data-[state=active]:bg-slate-950"
                    : "data-[state=active]:bg-slate-300"
                )}
              >
                Referral By
              </TabsTrigger>
            </TabsList>
            <TabsContent value="deposit">
              <div className="h-full flex-1 flex-col space-y-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                  <div className="flex items-center space-x-2"></div>
                </div>
                <MainDataTable
                  columns={userDetailDepositColumns}
                  data={depositList?.map((el, index) => {
                    return {
                      ...el,
                      id: index + 1,
                      status:
                        el?.status == 0
                          ? "pending"
                          : el?.status == 1
                          ? "approved"
                          : "rejected",
                      depositTo: String(el?.depositTo),
                      // nameEmail: el?.name + " / " + el?.email,
                    };
                  })}
                  defaultSearchKey={userDetailDepositSearchKeys[0]?.value}
                  searchKeys={userDetailDepositSearchKeys}
                  facetFilter={userDetailDepositFacetFilter}
                />
              </div>
            </TabsContent>
            <TabsContent value="withdraw">
              <div className="h-full flex-1 flex-col space-y-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                  <div className="flex items-center space-x-2"></div>
                </div>
                <MainDataTable
                  columns={userDetailsWithdrawColumns}
                  data={withdrawList?.map((el, index) => {
                    return {
                      ...el,
                      id: index + 1,
                      status:
                        el?.status == 0
                          ? "pending"
                          : el?.status == 1
                          ? "approved"
                          : "rejected",
                      nameEmail: el?.name + " / " + el?.email,
                    };
                  })}
                  defaultSearchKey={userDetailsWithdrawSearchKeys[0]?.value}
                  searchKeys={userDetailsWithdrawSearchKeys}
                  facetFilter={userDetailsWithdrawFacetFilter}
                />
              </div>
            </TabsContent>
            <TabsContent value="account">
              <div className="h-full flex-1 flex-col space-y-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                  <div className="flex items-center space-x-2"></div>
                </div>
                <MainDataTable
                  columns={userDetailsMt5Columns}
                  data={accounts?.map((el, index) => {
                    return {
                      ...el,
                      id: index + 1,
                    };
                  })}
                  defaultSearchKey={userDetailsMt5SearchKeys[0]?.value}
                  searchKeys={userDetailsMt5SearchKeys}
                  facetFilter={userDetailsMt5FacetFilter}
                />
              </div>
            </TabsContent>
            <TabsContent value="bankdetails">
              <div className="h-full flex-1 flex-col space-y-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                  <div className="flex items-center space-x-2"></div>
                </div>
                <MainDataTable
                  columns={userDetailsBankListColumns}
                  data={bankDetailsList?.map((el, index) => {
                    return {
                      ...el,
                      id: index + 1,
                    };
                  })}
                  defaultSearchKey={userDetailsBankSearchKeys[0].value}
                  searchKeys={userDetailsBankSearchKeys}
                  facetFilter={userDetailsBankFacetFilter}
                />
              </div>
            </TabsContent>
            <TabsContent value="loginactivity">
              <div className="h-full flex-1 flex-col space-y-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                  <div className="flex items-center space-x-2"></div>
                </div>
                <MainDataTable
                  columns={userDetailsLoginActivityColumns}
                  data={loginActivityList?.map((el, index) => {
                    return {
                      ...el,
                      id: index + 1,
                      status:
                        el?.status == 0
                          ? "pending"
                          : el?.status == 1
                          ? "approved"
                          : "rejected",
                    };
                  })}
                  defaultSearchKey={userDetailsLoginactivitySearchKeys[0].value}
                  searchKeys={userDetailsLoginactivitySearchKeys}
                  facetFilter={[[]]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default UserDetails;
