import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  groupFaceFilter,
  groupListColumns,
  groupSearchKeys,
} from "components/admindashboard/data-table/group-management/group-list-data";
import MainDataTable from "components/common/data-table/main-table";
import { Button } from "components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const GroupList = () => {
  const groupList = [
    {
      name: "Mini",
      mtgroup: "Tradeinfy\\ENC10",
      status: 1,
      createdAt: "2024-06-06",
    },
    {
      name: "Micro",
      mtgroup: "Tradeinfy\\Micro",
      status: 0,
      createdAt: "2024-05-19",
    },
  ];

  return (
    <>
      <ContentLayout
        title={"Group List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Group Management", link: "#" },
          { name: "Group List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={groupListColumns}
              data={groupList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                  status: el?.status == 1 ? "active" : "inactive",
                };
              })}
              searchKeys={groupSearchKeys}
              defaultSearchKey={"name"}
              facetFilter={groupFaceFilter}
            />
            {/* <AllInOneTable columns={columns} data={tasks} /> */}
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default GroupList;
