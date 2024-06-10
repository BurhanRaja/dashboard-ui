import React from "react";
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
} from "components/admindashboard/data-table/user-management/user/user-details-deposit";
import {
  userDetailsWithdrawColumns,
  userDetailsWithdrawFacetFilter,
  userDetailsWithdrawSearchKeys,
} from "components/admindashboard/data-table/user-management/user/user-details-withdraw";

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
        <AdminCard>
          <Tabs defaultValue="deposit" className="w-[100%]">
            <TabsList className="grid w-full grid-cols-6 bg-slate-900 text-white h-13 py-2 px-2">
              <TabsTrigger
                value="deposit"
                className="data-[state=active]:bg-slate-950 rounded-md p-2"
              >
                Deposit
              </TabsTrigger>
              <TabsTrigger
                value="withdraw"
                className="data-[state=active]:bg-slate-950 rounded-md p-2"
              >
                Withdraw
              </TabsTrigger>
              <TabsTrigger
                value="account"
                className="data-[state=active]:bg-slate-950 rounded-md p-2"
              >
                MT5 Account
              </TabsTrigger>
              <TabsTrigger
                value="bankdetails"
                className="data-[state=active]:bg-slate-950 rounded-md p-2"
              >
                Bank Details
              </TabsTrigger>
              <TabsTrigger
                value="loginactivity"
                className="data-[state=active]:bg-slate-950 rounded-md p-2"
              >
                Login Activity
              </TabsTrigger>
              <TabsTrigger
                value="referral"
                className="data-[state=active]:bg-slate-950 rounded-md p-2"
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
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you're
                    done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default UserDetails;
