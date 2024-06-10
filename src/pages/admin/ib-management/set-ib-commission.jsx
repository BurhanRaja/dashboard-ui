import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  setIBCommissionListColumns,
  setIBCommissionSearchKeys,
} from "components/admindashboard/data-table/ib-management/set-ib-commission";
import MainDataTable from "components/common/data-table/main-table";
import { Button } from "components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const SetIBCommissionList = () => {
  const setIBCommissionList = [
    {
      planname: "Test Plan",
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
      createdAt: "2024-06-07",
    },
  ];

  return (
    <>
      <ContentLayout
        title={"Set IB Commission List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "IB Management", link: "#" },
          { name: "Set IB Commission List", link: "#" },
        ]}
      >
        <div className="flex justify-end items-center my-3 px-4">
          <Link to={"/admin/ibmanagement/addcommissiongroup"}>
            <Button className="bg-primary hover:bg-secondary text-btntext">
              Set IB Commission
            </Button>
          </Link>
        </div>
        <AdminCard table>
          <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={setIBCommissionListColumns}
              data={setIBCommissionList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                };
              })}
              searchKeys={setIBCommissionSearchKeys}
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

export default SetIBCommissionList;
