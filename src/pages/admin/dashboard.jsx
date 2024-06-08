import React, { useContext } from "react";
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

  return (
    <>
      <ContentLayout
        title={"Dashboard"}
        breadcrumb={[{ name: "Dashboard", link: "/admin/dashboard" }]}
      >
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6">
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
            count={10}
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
            count={4}
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
            count={6}
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
            count={2}
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
            count={2}
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
            count={2}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 mb-10">
          <DashGraph />
          <div className="">
            <Card
              className={cn(
                "col-span-3 rounded-3xl",
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
        </div>
        {/* <Steps /> */}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6">
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
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6">
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
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6">
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
