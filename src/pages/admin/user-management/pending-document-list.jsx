import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import {
  documentListColumns,
  documentListSearchKeys,
} from "components/admindashboard/data-table/user-management/document-list-data";
import MainDataTable from "components/common/data-table/main-table";
import React from "react";

const PendingDocumentList = () => {
  let pendingDocumentList = [
    {
      id: 1,
      name: "Burhanuddin Raja",
      email: "burhanuddin@techysquad.com",
      phone: 8758400032,
      phoneCode: "+91",
      marketingname: "",
      createdAt: "2024-05-06",
    },
    {
      name: "Bijal Makvana",
      email: "bijal@techysquad.com",
      phone: 9177388441,
      phoneCode: "+91",
      marketingname: "Nikunj Tagadiya",
      createdAt: "2024-05-06",
    },
    {
      name: "Jignesh Patel",
      email: "patelsino1@gmail.com",
      phone: 890274821,
      phoneCode: "+91",
      marketingname: "",
      createdAt: "2024-05-06",
    },
  ];
  return (
    <>
      <ContentLayout
        title={"Pending Document List"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Managment", link: "#" },
          { name: "Pending Document List", link: "#" },
        ]}
      >
        <AdminCard table>
          <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div className="flex items-center space-x-2"></div>
            </div>
            <MainDataTable
              columns={documentListColumns}
              data={pendingDocumentList?.map((el, index) => {
                return {
                  ...el,
                  id: index + 1,
                  phone: el?.phoneCode + el?.phone,
                };
              })}
              defaultSearchKey={"name"}
              searchKeys={documentListSearchKeys}
              facetFilter={[]}
            />
          </div>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default PendingDocumentList;
