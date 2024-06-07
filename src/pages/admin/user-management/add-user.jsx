import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import FormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const AddUser = () => {
  return (
    <>
      <ContentLayout
        title={"Add User"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Managment", link: "#" },
          { name: "Add User", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-3 gap-4">
              <div className="mb-3">
                <FormLabel htmlfor={"name"} label="Name" />
                <FormInput id="name" type={"text"} placeholder={"Enter Name"} />
              </div>
              <div className="mb-3">
                <FormLabel htmlfor={"email"} label="Email" />
                <FormInput
                  id="email"
                  type={"email"}
                  placeholder={"Enter Email"}
                />
              </div>
              <div className="mb-3">
                <FormLabel htmlfor={"password"} label="Password" />
                <FormInput
                  id="password"
                  type={"password"}
                  placeholder={"Enter Password"}
                />
              </div>
              <div className="mb-3">
                <FormLabel htmlfor={"country"} label="Country" />
                <FormSelectSearch
                  data={[]}
                  emptyText={"No Country Found"}
                  margin
                />
              </div>
              <div className="mb-3">
                <FormLabel htmlfor={"phone"} label="Phone" />
                <div className="grid grid-cols-4 gap-1">
                  <FormInput id="phone" type={"text"} disabled value={"+998"} />
                  <div className="col-span-3">
                    <FormInput
                      id="phone"
                      type={"text"}
                      placeholder={"Enter Phone"}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <FormLabel htmlfor={"status"} label="Status" />
                <FormSelectSearch
                  data={[]}
                  emptyText={"No status Found"}
                  margin
                />
              </div>
              <div className="mb-3">
                <FormLabel htmlfor={"marketing"} label="Marketing" />
                <FormSelectSearch
                  data={[]}
                  emptyText={"No Marketing Found"}
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

export default AddUser;
