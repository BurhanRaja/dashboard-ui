import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  ibPlanColumns,
  ibPlanSearchKeys,
} from "components/admindashboard/data-table/ib-management/ib-plan-list-data";
import MainDataTable from "components/common/data-table/main-table";
import { Button } from "components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const IBPlanList = () => {
  const ibPlanList = [
    {
      id: 1,
      name: "Test Plan",
      createdAt: "2024-08-09",
    },
    {
      id: 1,
      name: "Common",
      createdAt: "2024-08-09",
    },
    {
      id: 1,
      name: "Custom",
      createdAt: "2024-08-09",
    },
  ];

  return (
    <>
      <ContentLayout
        title={"IB Plan List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Management", link: "#" },
          { name: "IB Plan List", link: "#" },
        ]}
      >
        <div className="flex justify-end items-center my-3 px-4">
          <Link to={"/admin/ibmanagement/addibplan"}>
            <Button className="bg-primary hover:bg-secondary text-btntext">
              Add Plan
            </Button>
          </Link>
        </div>
        <AdminCard table>
          <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={ibPlanColumns}
              data={ibPlanList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                };
              })}
              searchKeys={ibPlanSearchKeys}
              defaultSearchKey={"name"}
              facetFilter={[]}
            />
            {/* <AllInOneTable columns={columns} data={tasks} /> */}
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default IBPlanList;
