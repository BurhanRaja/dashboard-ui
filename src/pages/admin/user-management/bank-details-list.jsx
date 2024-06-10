import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  bankDetailsFacetFilter,
  bankDetailsListColumns,
  bankDetailsSearchKeys,
} from "components/admindashboard/data-table/user-management/bank-details-list-data";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const BankDetailsList = () => {
  let bankDetailsList = [
    {
      accountname: "Burhan",
      accountnumber: "97328201",
      bankname: "SBI Bank",
      bankaddress: "Any Address",
      country: "India",
      ifsccode: "3i2rh3iunk3",
      iban: "wqku212quwed",
      bookbank: "",
      comment: "Approved by admin",
      status: 1,
      createdAt: "2024-05-06",
    },
    {
      accountname: "Jignesh",
      accountnumber: "102983842",
      bankname: "SBI Bank",
      bankaddress: "Any Address",
      country: "India",
      ifsccode: "3i2rh3iunk3",
      iban: "wqku212quwed",
      bookbank: "",
      comment: "Approved by admin",
      status: 0,
      createdAt: "2024-05-06",
    },
  ];

  return (
    <>
      <ContentLayout
        title={"Bank Details List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Management", link: "#" },
          { name: "Bank Details List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={bankDetailsListColumns}
              data={bankDetailsList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                  status:
                    el?.status == 0
                      ? "pending"
                      : el?.status == 1
                      ? "approved"
                      : "rejected",
                };
              })}
              defaultSearchKey={"accountname"}
              searchKeys={bankDetailsSearchKeys}
              facetFilter={bankDetailsFacetFilter}
            />
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default BankDetailsList;
