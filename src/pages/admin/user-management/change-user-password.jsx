import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import FormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const ChangeUserPassword = () => {
  return (
    <ContentLayout
      title={"Change User Password"}
      breadcrumb={[
        { name: "Dashboard", link: "/admin/dashboard" },
        { name: "User Managment", link: "#" },
        { name: "Change User Password", link: "#" },
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
                <FormLabel htmlfor={"password"} label="Password" />
                <FormInput
                  type="text"
                  id="password"
                  placeholder={"Enter User Password"}
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
  );
};

export default ChangeUserPassword;
