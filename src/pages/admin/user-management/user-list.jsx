import { ContentLayout } from "components/admindashboard/common/content-layout";
import React from "react";

import AdminCard from "components/admindashboard/common/admin-form";
import MainDataTable from "components/common/data-table/main-table";
import {
  searchKeys,
  userListColumns,
  facetFilter,
} from "components/admindashboard/data-table/user-management/user-list-data";

const UserList = () => {
  let users = [
    {
      id: 1,
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
      phone: 8758400032,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 900.9,
      ibname: "",
      marketingname: "",
      login_verified: 1,
      kyc_verified: 1,
      createdAt: "2024-05-04",
      otp_enabled: 1,
      ib_status: 1,
    },
    {
      id: 2,
      name: "Bijal Makvana",
      email: "bijal@techysquad.com",
      phone: 9177388441,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 100.98,
      ibname: "Burhanuddin Raja",
      marketingname: "Alpa Pithiya",
      login_verified: 0,
      kyc_verified: null,
      createdAt: "2024-05-04",
      otp_enabled: null,
      ib_status: 1,
    },
    {
      id: 2,
      name: "Jignesh Patel",
      email: "patelsino1@gmail.com",
      phone: 890274821,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 190.53,
      ibname: "",
      marketingname: "",
      login_verified: 1,
      kyc_verified: 0,
      createdAt: "2024-05-04",
      otp_enabled: null,
      ib_status: 0,
    },
    {
      id: 2,
      name: "Nikunj Tagadiya",
      email: "nikunj@techysquad.com",
      phone: 9990894821,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 0.0,
      ibname: "Nikunj Tagadiya",
      marketingname: "",
      login_verified: 1,
      kyc_verified: 0,
      createdAt: "2024-05-04",
      otp_enabled: null,
      ib_status: 1,
    },
    {
      id: 2,
      name: "Sneha Tagadiya",
      email: "sneha@techysquad.com",
      phone: 8909894821,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 310.53,
      ibname: "Nikunj Tagadiya",
      marketingname: "",
      login_verified: 1,
      kyc_verified: 0,
      createdAt: "2024-05-04",
      otp_enabled: null,
      ib_status: 0,
    },
    {
      id: 1,
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
      phone: 8758400032,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 900.9,
      ibname: "",
      marketingname: "",
      login_verified: 1,
      kyc_verified: 1,
      createdAt: "2024-05-04",
      otp_enabled: 1,
      ib_status: 1,
    },
    {
      id: 2,
      name: "Bijal Makvana",
      email: "bijal@techysquad.com",
      phone: 9177388441,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 100.98,
      ibname: "Burhanuddin Raja",
      marketingname: "Alpa Pithiya",
      login_verified: 0,
      kyc_verified: null,
      createdAt: "2024-05-04",
      otp_enabled: null,
      ib_status: 1,
    },
    {
      id: 2,
      name: "Jignesh Patel",
      email: "patelsino1@gmail.com",
      phone: 890274821,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 190.53,
      ibname: "",
      marketingname: "",
      login_verified: 1,
      kyc_verified: 0,
      createdAt: "2024-05-04",
      otp_enabled: null,
      ib_status: 0,
    },
    {
      id: 2,
      name: "Nikunj Tagadiya",
      email: "nikunj@techysquad.com",
      phone: 9990894821,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 0.0,
      ibname: "Nikunj Tagadiya",
      marketingname: "",
      login_verified: 1,
      kyc_verified: 0,
      createdAt: "2024-05-04",
      otp_enabled: null,
      ib_status: 1,
    },
    {
      id: 2,
      name: "Sneha Tagadiya",
      email: "sneha@techysquad.com",
      phone: 8909894821,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 310.53,
      ibname: "Nikunj Tagadiya",
      marketingname: "",
      login_verified: 1,
      kyc_verified: 0,
      createdAt: "2024-05-04",
      otp_enabled: null,
      ib_status: 0,
    },
    {
      id: 1,
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
      phone: 8758400032,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 900.9,
      ibname: "",
      marketingname: "",
      login_verified: 1,
      kyc_verified: 1,
      createdAt: "2024-05-04",
      otp_enabled: 1,
      ib_status: 1,
    },
    {
      id: 2,
      name: "Bijal Makvana",
      email: "bijal@techysquad.com",
      phone: 9177388441,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 100.98,
      ibname: "Burhanuddin Raja",
      marketingname: "Alpa Pithiya",
      login_verified: 0,
      kyc_verified: null,
      createdAt: "2024-05-04",
      otp_enabled: null,
      ib_status: 1,
    },
    {
      id: 2,
      name: "Jignesh Patel",
      email: "patelsino1@gmail.com",
      phone: 890274821,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 190.53,
      ibname: "",
      marketingname: "",
      login_verified: 1,
      kyc_verified: 0,
      createdAt: "2024-05-04",
      otp_enabled: null,
      ib_status: 0,
    },
    {
      id: 2,
      name: "Nikunj Tagadiya",
      email: "nikunj@techysquad.com",
      phone: 9990894821,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 0.0,
      ibname: "Nikunj Tagadiya",
      marketingname: "",
      login_verified: 1,
      kyc_verified: 0,
      createdAt: "2024-05-04",
      otp_enabled: null,
      ib_status: 1,
    },
    {
      id: 2,
      name: "Sneha Tagadiya",
      email: "sneha@techysquad.com",
      phone: 8909894821,
      phoneCode: "+91",
      country: "India",
      wallet_balance: 310.53,
      ibname: "Nikunj Tagadiya",
      marketingname: "",
      login_verified: 1,
      kyc_verified: 0,
      createdAt: "2024-05-04",
      otp_enabled: null,
      ib_status: 0,
    },
  ];

  return (
    <>
      <ContentLayout
        title={"User List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Management", link: "#" },
          { name: "User List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
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
              searchKeys={searchKeys}
              defaultSearchKey={"name"}
              facetFilter={facetFilter}
            />
            {/* <AllInOneTable columns={columns} data={tasks} /> */}
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default UserList;
