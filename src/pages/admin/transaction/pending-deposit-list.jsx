import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  pendingDepositFacetFilter,
  pendingdepositlistColumns,
  pendingDepositSearchKeys,
} from "components/admindashboard/data-table/transaction/pending-deposit-list-data.";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const PendingDepositList = () => {
  const pendingDepositList = [
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
    },
  ];

  return (
    <>
      <ContentLayout
        title={"Pending Deposit List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Transaction", link: "#" },
          { name: "Pending Deposit List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={pendingdepositlistColumns}
              data={pendingDepositList?.map((el, index) => {
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
              defaultSearchKey={pendingDepositSearchKeys[0]?.value}
              searchKeys={pendingDepositSearchKeys}
              facetFilter={pendingDepositFacetFilter}
            />
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default PendingDepositList;
