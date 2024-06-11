import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  mt5UserListColumns,
  mt5UserListFacetFilter,
  mt5UserListSearchKeys,
} from "components/admindashboard/data-table/user-management/mt5-user-list-data";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const Mt5UserList = () => {
  const accounts = [
    {
      id: 1,
      account_no: 91452206,
      name: "Akash Sanjay Vadar",
      email: "akashwadar78@gmail.com",
      investorpassword: "#7p$YQ92m",
      mainpassword: "4WC7y&!r1",
      groupname: "Mini",
      leverage: 500,
      createdAt: "2024-06-05",
      marketingname: "",
    },
    {
      id: 5,
      account_no: 91452205,
      name: "Prashant Kumar Vadd",
      email: "prashantvadd640@gmail.com",
      investorpassword: "gW6M8n$4*",
      mainpassword: "25wVi4J$&",
      groupname: "Mini",
      leverage: 500,
      createdAt: "2024-06-05",
      marketingname: "",
    },
    {
      id: 30,
      account_no: 91452204,
      name: "Rohan Ashok Patil",
      email: "rp2331281@gmail.com",
      investorpassword: "#7p$YQ92m",
      mainpassword: "4WC7y&!r1",
      groupname: "ECN",
      leverage: 500,
      createdAt: "2024-06-05",
      marketingname: "",
    },
    {
      id: 23,
      account_no: 91452203,
      name: "Adhik Vishwas Patil",
      email: "adhikpatil99@gmail.com",
      investorpassword: "gW6M8n$4*",
      mainpassword: "25wVi4J$&",
      groupname: "Micro",
      leverage: 500,
      createdAt: "2024-06-05",
      marketingname: "",
    },
  ];

  return (
    <>
      <ContentLayout
        title={"MT5 User List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Management", link: "#" },
          { name: "MT5 User List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={mt5UserListColumns}
              data={accounts?.map((el, index) => {
                return {
                  ...el,
                  originalid: el?.id,
                  id: index + 1,
                };
              })}
              defaultSearchKey={"account_no"}
              searchKeys={mt5UserListSearchKeys}
              facetFilter={mt5UserListFacetFilter}
            />
            {/* <UserListDataTable
              columns={userListColumns}
              data={users?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                  login_verified:
                    el?.login_verified == null || el?.login_verified == 0
                      ? "not-verified"
                      : el?.login_verified == 1
                      ? "verified"
                      : "blocked",
                  kyc_verified:
                    el?.kyc_verified == null
                      ? "not-uploaded"
                      : el?.kyc_verified == 0
                      ? "pending"
                      : el?.kyc_verified == 1
                      ? "approved"
                      : "rejected",
                  ib_status:
                    el?.ib_status == null || el?.ib_status == 0
                      ? "pending"
                      : el?.ib_status == 1
                      ? "approved"
                      : "rejected",
                };
              })}
            /> */}
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default Mt5UserList;
