import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  bonusListColumns,
  bonusListFacetFilter,
  bonusListSearchKeys,
} from "components/admindashboard/data-table/bonus/bonus-list-data";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const BonusList = () => {
  let bonusList = [
    {
      id: 1,
      mt5id: 982844,
      amount: 10,
      equity: 10.08,
      type: 0,
      comment: "Test Note",
      createdAt: "2024-05-06",
    },
    {
      id: 1,
      mt5id: 982844,
      amount: 10,
      equity: 10.08,
      type: 1,
      comment: "Test Note",
      createdAt: "2024-05-06",
    },
    {
      id: 1,
      mt5id: 982844,
      amount: 10,
      equity: 10.08,
      type: 0,
      comment: "Test Note",
      createdAt: "2024-05-06",
    },
  ];
  return (
    <>
      <ContentLayout
        title={"Bonus List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Managment", link: "#" },
          { name: "Bonus List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={bonusListColumns}
              data={bonusList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                  type: el?.type == 0 ? "give" : "remove",
                };
              })}
              defaultSearchKey={"mt5id"}
              searchKeys={bonusListSearchKeys}
              facetFilter={bonusListFacetFilter}
            />
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default BonusList;
