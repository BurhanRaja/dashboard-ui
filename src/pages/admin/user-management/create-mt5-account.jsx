import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import FormLabel from "components/common/form-label";
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
          { name: "User Managment", link: "#" },
          { name: "Create MT5 Account", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-3">
                  <FormLabel htmlfor={"users"} label="Select User" />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No User Found"}
                    margin
                    width={"w-[530px]"}
                  />
                </div>
                <div className="mb-3">
                  <FormLabel htmlfor={"groups"} label="Select Group" />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No Group Found"}
                    margin
                    width={"w-[530px]"}
                  />
                </div>
                <div className="mb-3">
                  <FormLabel htmlfor={"leverages"} label="Select Leverage" />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No Leverage Found"}
                    margin
                    width={"w-[530px]"}
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
