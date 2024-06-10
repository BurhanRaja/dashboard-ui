import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  withdrawReportColumns,
  withdrawReportFacetFilter,
  withdrawReportSearchKeys,
} from "components/admindashboard/data-table/report/withdraw-report-list-data";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const WithdrawReportList = () => {
  const withdrawReportList = [
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
        title={"Withdraw Report"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Transaction", link: "#" },
          { name: "Withdraw Report", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={withdrawReportColumns}
              data={withdrawReportList?.map((el, index) => {
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
              defaultSearchKey={withdrawReportSearchKeys[0]?.value}
              searchKeys={withdrawReportSearchKeys}
              facetFilter={withdrawReportFacetFilter}
            />
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default WithdrawReportList;
