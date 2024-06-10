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

const UserDetails = () => {
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
          <Tabs defaultValue="account" className="w-[100%]">
            <TabsList className="grid w-full grid-cols-4 bg-slate-900 text-white h-13 py-2 px-2">
              <TabsTrigger value="deposit" className="data-[state=active]:bg-slate-950 rounded-md p-2">Deposit</TabsTrigger>
              <TabsTrigger value="withdraw" className="data-[state=active]:bg-slate-950 rounded-md p-2">Withdraw</TabsTrigger>
              <TabsTrigger value="account" className="data-[state=active]:bg-slate-950 rounded-md p-2">MT5 Account</TabsTrigger>
              <TabsTrigger value="password" className="data-[state=active]:bg-slate-950 rounded-md p-2">Password</TabsTrigger>
            </TabsList>
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
