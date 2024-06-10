import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import FormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const CreateSubAdmin = () => {
  return (
    <>
      <ContentLayout
        title={"Create Sub Admin"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Management", link: "#" },
          { name: "Create Sub Admin", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-3">
                <FormLabel htmlfor={"name"} label="Name" compulsory />
                <FormInput id="name" type={"text"} placeholder={"Enter Name"} />
              </div>
              <div className="mb-3">
                <FormLabel htmlfor={"email"} label="Email" compulsory />
                <FormInput
                  id="email"
                  type={"email"}
                  placeholder={"Enter Email"}
                />
              </div>
              <div className="mb-3">
                <FormLabel htmlfor={"password"} label="Password" compulsory />
                <FormInput
                  id="password"
                  type={"password"}
                  placeholder={"Enter Password"}
                />
              </div>
              <div className="mb-3">
                <FormLabel
                  htmlfor={"admintype"}
                  label="Admin Type"
                  compulsory
                />
                <FormSelectSearch
                  data={[]}
                  emptyText={"No Type Found"}
                  width={"w-[300px] md:w-[350px]"}
                  margin
                />
              </div>
              <div className="mb-3">
                <FormLabel htmlfor={"group"} label="Select Group" compulsory />
                <FormSelectSearch
                  data={[]}
                  emptyText={"No Group Found"}
                  width={"w-[300px] md:w-[350px]"}
                  margin
                />
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

export default CreateSubAdmin;
