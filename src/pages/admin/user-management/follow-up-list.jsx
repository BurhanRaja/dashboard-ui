import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import { followUpListColumns } from "components/admindashboard/data-table/user-management/follow-up-list-data";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const FollowUpList = () => {
  let followUpList = [
    {
      id: 1,
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
      phone: 8758400032,
      phoneCode: "+91",
      country: "India",
      marketingname: "",
      createdAt: "2024-05-06",
    },
    {
      name: "Bijal Makvana",
      email: "bijal@techysquad.com",
      phone: 9177388441,
      phoneCode: "+91",
      country: "India",
      marketingname: "Nikunj Tagadiya",
      createdAt: "2024-05-06",
    },
    {
      name: "Jignesh Patel",
      email: "patelsino1@gmail.com",
      phone: 890274821,
      phoneCode: "+91",
      country: "India",
      marketingname: "",
      createdAt: "2024-05-06",
    },
  ];
  return (
    <>
      <ContentLayout
        title={"Follow Up List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Managment", link: "#" },
          { name: "Follow Up List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={followUpListColumns}
              data={followUpList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                  phone: el?.phoneCode + el?.phone,
                };
              })}
              facetFilter={[]}
              defaultSearchKey={"name"}
              searchKeys={[
                {
                  value: "name",
                  label: "Name",
                },
                {
                  value: "email",
                  label: "Email",
                },
                {
                  value: "marketingname",
                  label: "Marketing Name",
                },
              ]}
            />
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default FollowUpList;
