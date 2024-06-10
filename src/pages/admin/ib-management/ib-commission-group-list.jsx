import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  ibCommissionGroupFaceFilter,
  ibCommissionGroupSearchKeys,
  ibCommissionGroupListColumns,
} from "components/admindashboard/data-table/ib-management/ib-commission-group-list";
import MainDataTable from "components/common/data-table/main-table";
import { Button } from "components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const IBCommissionGroupList = () => {
  const ibCommissionGroupList = [
    {
      planname: "Test Plan",
      groupname: "Mini",
      level1: 10,
      level2: 9,
      level3: 8,
      level4: 6,
      level5: 4,
      level6: 2,
      level7: 1,
    },
  ];

  return (
    <>
      <ContentLayout
        title={"Commission Group List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "IB Management", link: "#" },
          { name: "Commission Group List", link: "#" },
        ]}
      >
        <div className="flex justify-end items-center my-3 px-4">
          <Link to={"/admin/ibmanagement/addcommissiongroup"}>
            <Button className="bg-primary hover:bg-secondary text-btntext">
              Add Commission Group
            </Button>
          </Link>
        </div>
        <AdminCard table>
          <div className="h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={ibCommissionGroupListColumns}
              data={ibCommissionGroupList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                };
              })}
              searchKeys={ibCommissionGroupSearchKeys}
              defaultSearchKey={"planname"}
              facetFilter={ibCommissionGroupFaceFilter}
            />
            {/* <AllInOneTable columns={columns} data={tasks} /> */}
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default IBCommissionGroupList;
