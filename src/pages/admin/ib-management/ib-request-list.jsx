import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  ibRequestListColumns,
  ibRequestSearchKeys,
} from "components/admindashboard/data-table/ib-management/ib-request-list-data";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const IBRequestList = () => {
  const ibUsersList = [
    {
      id: 1,
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
      phone: 9748920223,
      phoneCode: "+91",
      country: "India",
      createdAt: "2024-06-08",
    },
    {
      id: 2,
      name: "Bijal Makvana",
      email: "bijal@techysquad.com",
      phone: 9748920223,
      phoneCode: "+91",
      country: "India",
      createdAt: "2024-06-08",
    },
    {
      id: 2,
      name: "Jignesh Patel",
      email: "jignesh@techysquad.com",
      phone: 9748920223,
      phoneCode: "+91",
      country: "India",
      createdAt: "2024-06-08",
    },
  ];

  return (
    <>
      <ContentLayout
        title={"IB Request List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Managment", link: "#" },
          { name: "IB Request List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={ibRequestListColumns}
              data={ibUsersList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                  phone: el?.phoneCode + el?.phone,
                };
              })}
              searchKeys={ibRequestSearchKeys}
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

export default IBRequestList;
