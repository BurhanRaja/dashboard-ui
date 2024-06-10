import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import React from "react";

const CreateMt5Account = () => {
  return (
    <>
      <ContentLayout
        title={"Create MT5 Account"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Management", link: "#" },
          { name: "Create MT5 Account", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="xl:grid xl:grid-cols-1 xl:gap-4">
                <div className="mb-3">
                  <CustomFormLabel htmlfor={"users"} label="Select User" compulsory />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No User Found"}
                    margin
                    width={"w-[350px] md:w-[450px] xl:w-[530px]"}
                  />
                </div>
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"groups"}
                    label="Select Group"
                    compulsory
                  />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No Group Found"}
                    margin
                    width={"w-[350px] md:w-[450px] xl:w-[530px]"}
                  />
                </div>
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"leverages"}
                    label="Select Leverage"
                    compulsory
                  />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No Leverage Found"}
                    margin
                    width={"w-[350px] lg:w-[530px]"}
                  />
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

export default CreateMt5Account;
