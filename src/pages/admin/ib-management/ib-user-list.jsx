import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  ibUserListColumns,
  ibUserSearchKeys,
} from "components/admindashboard/data-table/ib-management/ib-user-list-data";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const IBUserList = () => {
  const ibUsersList = [
    {
      id: 1,
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
      phone: 9748920223,
      phoneCode: "+91",
      ibname: "Jignesh Patel",
      total_commission: 500.09,
      available_commission: 90,
      ibKey: "dj839jdiqwn",
      marketingname: "",
    },
    {
      id: 2,
      name: "Bijal Makvana",
      email: "bijal@techysquad.com",
      phone: 9748920223,
      phoneCode: "+91",
      ibname: "",
      total_commission: 278.9,
      available_commission: 90,
      ibKey: "kuh8uuknkj",
      marketingname: "Alpa Pithiya",
    },
    {
      id: 2,
      name: "Jignesh Patel",
      email: "jignesh@techysquad.com",
      phone: 9748920223,
      phoneCode: "+91",
      ibname: "Nikunj Tagadiya",
      total_commission: 278.9,
      available_commission: 90,
      ibKey: "kuh8uuknkj",
      marketingname: "",
    },
  ];

  return (
    <>
      <ContentLayout
        title={"IB User List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "IB Management", link: "#" },
          { name: "IB User List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={ibUserListColumns}
              data={ibUsersList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                  referralLink: `http://localhost:5173/register/${el?.ibKey}`,
                  phone: el?.phoneCode + el?.phone,
                };
              })}
              searchKeys={ibUserSearchKeys}
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

export default IBUserList;
