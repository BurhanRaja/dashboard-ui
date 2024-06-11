import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  marketingListColumns,
  marketingListSearchKeys,
} from "components/admindashboard/data-table/marketing/marketing-list-data";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const MarketingList = () => {
  const marketingList = [
    {
      id: 1,
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
      password: "123456789",
      createdAt: "2024-05-04",
      incentive: 10,
      netdeposit: 1000.421,
      lots: 10.03,
    },
  ];

  return (
    <>
      <ContentLayout
        title={"Marketing List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Marketing", link: "#" },
          { name: "Marketing List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={marketingListColumns}
              data={marketingList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                  status: el?.status == 1 ? "active" : "inactive",
                };
              })}
              searchKeys={marketingListSearchKeys}
              defaultSearchKey={marketingListSearchKeys[0]?.value}
              facetFilter={[]}
            />
            {/* <AllInOneTable columns={columns} data={tasks} /> */}
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default MarketingList;
