import LineChartComp from "components/charts/line-chart-comp";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/ui/tabs";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import React, { useContext } from "react";

const DashGraph = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={cn(
          "w-full col-span-2 rounded-3xl shadow p-4 md:p-6",
          theme == "dark" ? "bg-slate-950" : "bg-white"
        )}
        // style={{
        //   boxShadow:
        //     theme == "dark"
        //       ? "rgb(6 7 11 / 72%) 7px 7px 15px 0px"
        //       : "7px 8px 13px 6px rgba(112,144,176,0.18)",
        // }}
      >
        <Tabs defaultValue="account" className="">
          <TabsList
            className={cn(
              "mb-8 grid grid-cols-2 gap-3 p-0 px-2",
              theme == "dark" ? "bg-darkactive" : "bg-lightactive"
            )}
          >
            <TabsTrigger
              className={cn(
                "text-sm rounded-md",
                theme == "dark"
                  ? "text-textlight [&[data-state=active]]:bg-slate-950"
                  : "[&[data-state=active]]:text-textlight [&[data-state=active]]:bg-darkactive"
              )}
              value="account"
            >
              Transactions
            </TabsTrigger>
            <TabsTrigger
              className={cn(
                "text-sm rounded-md",
                theme == "dark"
                  ? "text-textlight [&[data-state=active]]:bg-slate-950"
                  : "[&[data-state=active]]:text-textlight [&[data-state=active]]:bg-darkactive"
              )}
              value="password"
            >
              Clients
            </TabsTrigger>
          </TabsList>
          <TabsContent className="w-[100%]" value="account">
            <div className="flex justify-between mb-5">
              <div className="grid gap-4 grid-cols-2">
                <div>
                  <p
                    className={cn(
                      "text-2xl leading-none font-bold",
                      theme == "dark" ? "text-white" : "text-gray-900 "
                    )}
                  >
                    Transactions
                  </p>
                </div>
              </div>
              <div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="lastDaysdropdown"
                  data-dropdown-placement="bottom"
                  type="button"
                  className="px-3 py-2 inline-flex items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Last week{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="lastDaysdropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Yesterday
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Today
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Last 7 days
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Last 30 days
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Last 90 days
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <LineChartComp
              chartData={[
                {
                  name: "Deposit",
                  data: [50, 64, 48, 66, 49, 68],
                },
                {
                  name: "Withdraw",
                  data: [30, 40, 24, 46, 20, 46],
                },
                {
                  name: "IB Withdraw",
                  data: [66, 49, 68, 30, 40, 24],
                },
              ]}
              xlabels={[
                "2024-05-24",
                "2024-05-25",
                "2024-05-26",
                "2024-05-27",
                "2024-05-28",
                "2024-05-29",
              ]}
            />
            <div className="grid grid-cols-1 items-center">
              <div className="pt-5"></div>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="flex justify-between mb-5">
              <div className="grid gap-4 grid-cols-2">
                <div>
                  <p
                    className={cn(
                      "text-2xl leading-none font-bold",
                      theme == "dark" ? "text-white" : "text-gray-900 "
                    )}
                  >
                    Clients
                  </p>
                </div>
              </div>
              {/* Remaining */}
              <div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="lastDaysdropdown"
                  data-dropdown-placement="bottom"
                  type="button"
                  className="px-3 py-2 inline-flex items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Last week{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="lastDaysdropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Yesterday
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Today
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Last 7 days
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Last 30 days
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Last 90 days
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <LineChartComp
              chartData={[
                {
                  name: "Clients",
                  data: [90, 24, 48, 66, 59, 98],
                },
              ]}
              xlabels={[
                "2024-05-24",
                "2024-05-25",
                "2024-05-26",
                "2024-05-27",
                "2024-05-28",
                "2024-05-29",
              ]}
            />
            <div className="grid grid-cols-1 items-center">
              <div className="pt-5"></div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default DashGraph;
