import React, { useContext, useEffect, useState } from "react";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import {
  Banknote,
  CircleDollarSign,
  DollarSign,
  File,
  SwitchCamera,
  User,
  Users,
} from "lucide-react";
import { Button } from "components/ui/button";
import RecentUsers from "components/admindashboard/dashboard/recent-users";
import DashCard from "components/common/dash-card";
import DashGraph from "components/admindashboard/dashboard/dash-graph";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";

const AdminDashboard = () => {
  const { theme } = useContext(ThemeContext);

  const [loading, setLoading] = useState(false);
  const [usersCount, setUsersCount] = useState(0);
  const [ibusersCount, setIBUsersCount] = useState(0);
  const [pendingDocsCount, setPendingDocsCount] = useState(0);
  const [pendingDepositCount, setPendingDepositCount] = useState(0);
  const [pendingWithdrawCount, setpendingWithdrawCount] = useState(0);
  const [pendingIBWithdrawCount, setpendingIBWithdrawCount] = useState(0);

  const handleDashboardData = async () => {
    setLoading(true);

    const [response1, response2, response3, response4, response5, response6] =
      await Promise.all([
        fetch("https://tsapi.tradeinfy.com/api/admin/users/total", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admintoken")}`,
          },
        }),
        fetch("https://tsapi.tradeinfy.com/api/admin/ib/users/total", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admintoken")}`,
          },
        }),
        fetch("https://tsapi.tradeinfy.com/api/admin/users/kycpending/total", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admintoken")}`,
          },
        }),
        fetch("https://tsapi.tradeinfy.com/api/admin/deposit/pending/total", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admintoken")}`,
          },
        }),
        fetch("https://tsapi.tradeinfy.com/api/admin/withdraw/pending/total", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admintoken")}`,
          },
        }),
        fetch("https://tsapi.tradeinfy.com/api/admin/ib/pendingibwithdraw", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("admintoken")}`,
          },
        }),
      ]);

    const totalUsers = await response1.json();
    const totalIBUsers = await response2.json();
    const totalPendingDocs = await response3.json();
    const totalPendingDeposit = await response4.json();
    const totalPendingWithdraw = await response5.json();
    const totalPendingIBWithdraw = await response6.json();

    if (totalUsers?.status == 200 && totalUsers?.success == true) {
      setUsersCount(totalUsers?.data?.total_users);
    }
    if (totalIBUsers?.status == 200 && totalIBUsers?.success == true) {
      setIBUsersCount(totalIBUsers?.data?.total_users_ib);
    }
    if (totalPendingDocs?.status == 200 && totalPendingDocs?.success == true) {
      setPendingDocsCount(totalPendingDocs?.data?.total_pending_kyc);
    }
    if (totalPendingDeposit?.status == 200 && totalPendingDeposit?.success == true) {
      setPendingDepositCount(totalPendingDeposit?.data?.total_pending_deposit);
    }
    if (totalPendingWithdraw?.status == 200 && totalPendingWithdraw?.success == true) {
      setpendingWithdrawCount(totalPendingWithdraw?.data?.total_pending_withdraw);
    }
    if (totalPendingIBWithdraw?.status == 200 && totalPendingIBWithdraw?.success == true) {
      setpendingIBWithdrawCount(totalPendingIBWithdraw?.data?.length);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleDashboardData();
  }, []);

  return (
    <>
      <ContentLayout
        title={"Dashboard"}
        breadcrumb={[{ name: "Dashboard", link: "/admin/dashboard" }]}
      >
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mb-6">
          <DashCard
            title={"Total Clients"}
            icon={
              <Button
                className={"rounded-full bg-darkactive text-lightactive py-9"}
              >
                <User size={40} />
              </Button>
            }
            link={"/"}
            count={usersCount}
            isLoading={loading}
          />
          <DashCard
            title={"Total IBs"}
            icon={
              <Button
                className={"rounded-full bg-darkactive text-lightactive py-9"}
              >
                <Users size={40} />
              </Button>
            }
            link={"/"}
            count={ibusersCount}
            isLoading={loading}
          />
          <DashCard
            title={"Pending Documents"}
            icon={
              <Button
                className={"rounded-full bg-darkactive text-lightactive py-9"}
              >
                <File size={40} />
              </Button>
            }
            link={"/"}
            count={pendingDocsCount}
            isLoading={loading}
          />
          <DashCard
            title={"Pending Deposits"}
            icon={
              <Button
                className={"rounded-full bg-darkactive text-lightactive py-9"}
              >
                <CircleDollarSign size={40} />
              </Button>
            }
            link={"/"}
            count={pendingDepositCount}
            isLoading={loading}
          />
          <DashCard
            title={"Pending Withdraws"}
            icon={
              <Button
                className={"rounded-full bg-darkactive text-lightactive py-9"}
              >
                <CircleDollarSign size={40} />
              </Button>
            }
            link={"/"}
            count={pendingWithdrawCount}
            isLoading={loading}
          />
          <DashCard
            title={"Pending IB Withdraws"}
            icon={
              <Button
                className={"rounded-full bg-darkactive text-lightactive py-9"}
              >
                <CircleDollarSign size={40} />
              </Button>
            }
            link={"/"}
            count={pendingIBWithdrawCount}
            isLoading={loading}
          />
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 mb-6">
          <DashGraph />
          {/* <div className=""> */}
          <Card
            className={cn(
              "rounded-3xl",
              theme == "dark" ? "bg-slate-950 border-none" : "bg-white"
            )}
            // style={{
            //   boxShadow:
            //     theme == "dark"
            //       ? "rgb(6 7 11 / 72%) 7px 7px 15px 0px"
            //       : "7px 8px 13px 6px rgba(112,144,176,0.18)",
            // }}
          >
            <CardHeader>
              <CardTitle className="mb-3">
                <div className="flex items-center justify-between text-2xl">
                  <p className={cn(theme == "dark" ? "text-white" : "")}>
                    Latest Clients
                  </p>
                  <a href="/" className="text-sm text-primary">
                    View More
                  </a>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RecentUsers />
            </CardContent>
          </Card>
        </div>
        {/* </div> */}
        {/* <Steps /> */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-6">
          <DashCard
            title={"Daily Deposits"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-3"
                }
              >
                <DollarSign size={15} />
              </Button>
            }
            link={""}
            count={10}
            small={true}
          />
          <DashCard
            title={"Weekly Deposits"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-3"
                }
              >
                <DollarSign size={15} />
              </Button>
            }
            link={""}
            count={4}
            small={true}
          />
          <DashCard
            title={"Monthly Deposits"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-3"
                }
              >
                <DollarSign size={15} />
              </Button>
            }
            link={""}
            count={6}
            small={true}
          />
          <DashCard
            title={"Total Deposits"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-3"
                }
              >
                <DollarSign size={15} />
              </Button>
            }
            link={""}
            count={6}
            small={true}
          />
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-6">
          <DashCard
            title={"Daily Withdraws"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-2.5"
                }
              >
                <Banknote size={20} />
              </Button>
            }
            link={""}
            count={10}
            small={true}
          />
          <DashCard
            title={"Weekly Withdraws"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-2.5"
                }
              >
                <Banknote size={20} />
              </Button>
            }
            link={""}
            count={4}
            small={true}
          />
          <DashCard
            title={"Monthly Withdraws"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-2.5"
                }
              >
                <Banknote size={20} />
              </Button>
            }
            link={""}
            count={6}
            small={true}
          />
          <DashCard
            title={"Total Withdraws"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-2.5"
                }
              >
                <Banknote size={20} />
              </Button>
            }
            link={""}
            count={6}
            small={true}
          />
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-6">
          <DashCard
            title={"Daily IB Withdraws"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-2.5"
                }
              >
                <SwitchCamera size={20} />
              </Button>
            }
            link={""}
            count={10}
            small={true}
          />
          <DashCard
            title={"Weekly IB Withdraws"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-2.5"
                }
              >
                <SwitchCamera size={20} />
              </Button>
            }
            link={""}
            count={4}
            small={true}
          />
          <DashCard
            title={"Monthly IB Withdraws"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-2.5"
                }
              >
                <SwitchCamera size={20} />
              </Button>
            }
            link={""}
            count={6}
            small={true}
          />
          <DashCard
            title={"Total IB Withdraws"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-2.5"
                }
              >
                <SwitchCamera size={20} />
              </Button>
            }
            link={""}
            count={6}
            small={true}
          />
        </div>
      </ContentLayout>
    </>
  );
};

export default AdminDashboard;
