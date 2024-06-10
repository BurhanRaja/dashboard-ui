import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import OrgChartTree from "components/common/tree-chart";
import React from "react";

const IBTreeChart = () => {
  const treeData = {
    name: "Burhanuddin Raja",
    children: [
      {
        name: "Bijal",
        attributes: {
          "Total Lots": 10.89,
          "Total Commission": 800.98,
          "Parent Name": "Burhanuddin Raja",
        },
        children: [
          {
            name: "Jignesh Patel",
            attributes: {
              "Total Lots": 10.89,
              "Total Commission": 800.98,
              "Parent Name": "Bijal Makvana",
            },
            children: [
              {
                name: "Harsh Soni",
                attributes: {
                  "Total Lots": 10.89,
                  "Total Commission": 800.98,
                  "Parent Name": "Jignesh Patel",
                },
              },
            ],
          },
          {
            name: "Jhon Doe",
            attributes: {
              "Total Lots": 10.89,
              "Total Commission": 800.98,
              "Parent Name": "Bijal Makvana",
            },
            children: [
              {
                name: "Marshal Brooks",
                attributes: {
                  "Total Lots": 10.89,
                  "Total Commission": 800.98,
                  "Parent Name": "Jhon Doe",
                },
              },
            ],
          },
        ],
      },
      {
        name: "Nikunj Tagadiya",
        attributes: {
          "Total Lots": 10.89,
          "Total Commission": 800.98,
          "Parent Name": "Burhanuddin Raja",
        },
        children: [
          {
            name: "Marshal Brooks",
            attributes: {
              "Total Lots": 10.89,
              "Total Commission": 800.98,
              "Parent Name": "Jhon Doe",
            },
            children: [
              {
                name: "Marshal Brooks",
                attributes: {
                  "Total Lots": 10.89,
                  "Total Commission": 800.98,
                  "Parent Name": "Jhon Doe",
                },
              },
            ],
          },
          {
            name: "Marshal Brooks",
            attributes: {
              "Total Lots": 10.89,
              "Total Commission": 800.98,
              "Parent Name": "Jhon Doe",
            },
            children: [
              {
                name: "Marshal Brooks",
                attributes: {
                  "Total Lots": 10.89,
                  "Total Commission": 800.98,
                  "Parent Name": "Jhon Doe",
                },
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <>
      <ContentLayout
        title={"Tree Chart"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "IB Management", link: "#" },
          { name: "IB User List", link: "#" },
          { name: "Tree Chart", link: "#" },
        ]}
      >
        {/* <div className="h-[100%]"> */}
        <OrgChartTree data={treeData} />
        {/* </div> */}
      </ContentLayout>
    </>
  );
};

export default IBTreeChart;
