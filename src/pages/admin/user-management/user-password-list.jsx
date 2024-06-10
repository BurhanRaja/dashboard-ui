import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  userPasswordSearchKeys,
  userPasswordListColumns,
  userPasswordFacetFilter,
} from "components/admindashboard/data-table/user-management/user-password-list-data";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const UserPasswordList = () => {
  let userPasswordList = [
    {
      id: 1,
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
      phone: 9283803841,
      phoneCode: "+91",
      password: "123456789",
      createdAt: "2024-05-06",
      userType: 0,
    },
    {
      name: "Bijal Makvana",
      email: "bijal@techysquad.com",
      phone: 9283803841,
      phoneCode: "+91",
      password: "123456789",
      createdAt: "2024-05-06",
      userType: 1,
    },
    {
      name: "Jignesh Patel",
      email: "patelsino1@gmail.com",
      phone: 9283803841,
      phoneCode: "+91",
      password: "123456789",
      createdAt: "2024-05-06",
      userType: 0,
    },
  ];
  return (
    <>
      <ContentLayout
        title={"Follow Up List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Management", link: "#" },
          { name: "Follow Up List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={userPasswordListColumns}
              data={userPasswordList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                  userType: el?.userType == 0 ? "client" : "ib",
                  phone: el?.phoneCode + el?.phone,
                };
              })}
              defaultSearchKey={"name"}
              searchKeys={userPasswordSearchKeys}
              facetFilter={userPasswordFacetFilter}
            />
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default UserPasswordList;
