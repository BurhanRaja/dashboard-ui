import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  depositReportColumns,
  depositReportFacetFilter,
  depositReportSearchKeys,
} from "components/admindashboard/data-table/report/deposit-report-list-data";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const DepositReportList = () => {
  const depositReportList = [
    {
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
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
      name: "Bijal Makvana",
      email: "bijal@techysquad.com",
      amount: 390.48,
      status: 0,
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

  return (
    <>
      <ContentLayout
        title={"Deposit Report"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Report", link: "#" },
          { name: "Deposit Report", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={depositReportColumns}
              data={depositReportList?.map((el, index) => {
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
              defaultSearchKey={depositReportSearchKeys[0]?.value}
              searchKeys={depositReportSearchKeys}
              facetFilter={depositReportFacetFilter}
            />
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default DepositReportList;
