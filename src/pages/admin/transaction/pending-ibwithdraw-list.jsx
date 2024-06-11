import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  ibWithdrawListFacetFilter,
  ibWithdrawListSearchKeys,
  ibwithdrawListColumns,
} from "components/admindashboard/data-table/transaction/pending-ibwithdraw-list-data";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const PendingIbwithdrawList = () => {
  const ibWithdrawList = [
    {
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
      amount: 100.98,
      status: 0,
      paymentmethod: "bank",
      withdrawFrom: 9827492,
      note: "Test Note",
      createdAt: "2024-05-06",
      withdrawTo: "2iej28jsi2js",
      marketingname: "",
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
    },
  ];

  return (
    <>
      <ContentLayout
        title={"Pending IB Withdraw List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Transaction", link: "#" },
          { name: "Pending IB Withdraw List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={ibwithdrawListColumns}
              data={ibWithdrawList?.map((el, index) => {
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
              defaultSearchKey={ibWithdrawListSearchKeys[0]?.value}
              searchKeys={ibWithdrawListSearchKeys}
              facetFilter={ibWithdrawListFacetFilter}
            />
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default PendingIbwithdrawList;
