import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  promotionListColumns,
  promotionListFacetFilter,
} from "components/admindashboard/data-table/settings/promotion-list-data";
import MainDataTable from "components/common/data-table/main-table";
import { Button } from "components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const PromotionList = () => {
  const promotionList = [
    {
      id: 1,
      type: 1,
      description: "Hello World",
      status: 1,
      createdAt: "2024-08-01",
    },
    {
      id: 1,
      type: 0,
      description: "",
      status: 1,
      createdAt: "2024-08-01",
    },
    {
      id: 1,
      type: 0,
      description: "",
      status: 2,
      createdAt: "2024-08-01",
    },
  ];

  return (
    <>
      <ContentLayout
        title={"Promotion List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Settings", link: "#" },
          { name: "Promotion List", link: "#" },
        ]}
      >
        <div className="flex justify-end items-center my-3 px-4">
          <Link to={"/admin/ibmanagement/addibplan"}>
            <Button className="bg-primary hover:bg-secondary text-btntext">
              Add Promotion
            </Button>
          </Link>
        </div>
        <AdminCard table>
          <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={promotionListColumns}
              data={promotionList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                  type: el?.type == 1 ? "text" : "image",
                  status: el?.status == 1 ? "active" : "inactive",
                };
              })}
              searchKeys={[]}
              defaultSearchKey={""}
              facetFilter={promotionListFacetFilter}
            />
            {/* <AllInOneTable columns={columns} data={tasks} /> */}
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default PromotionList;
