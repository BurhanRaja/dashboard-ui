import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const AddExisitingClient = () => {
  return (
    <>
      <ContentLayout
        title={"Add Exisiting Client"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Management", link: "#" },
          { name: "Add Exisiting Client", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-3">
                  <CustomFormLabel htmlfor={"users"} label="Select User" compulsory />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No User Found"}
                    margin
                    width={"w-[530px]"}
                  />
                </div>
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"mt5accounts"}
                    label="MT5 Accounts"
                    compulsory
                  />
                  <FormInput
                    type="text"
                    id="mt5accounts"
                    placeholder={"Enter MT5 Accounts - 122211,1234632,1233423"}
                  />
                  <small className="text-danger">
                    Enter comma "," seperated values
                  </small>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Button className="bg-primary hover:bg-secondary text-white">
                Submit
              </Button>
            </div>
          </form>
        </AdminCard>
      </ContentLayout>
    </>
  );
};

export default AddExisitingClient;
