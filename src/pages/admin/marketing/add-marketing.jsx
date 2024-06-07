import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import FormLabel from "components/common/form-label";
import { Button } from "components/ui/button";
import React from "react";

const AddMarketing = () => {
  return (
    <>
      <ContentLayout
        title={"Add User"}
        breadcrumb={[
          { name: "Dashboard", link: "#" },
          { name: "User Managment", link: "#" },
          { name: "Add User", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-2 gap-4">
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
                <FormLabel htmlfor={"incentive"} label="Incentive (%)" />
                <FormInput
                  id="incentive"
                  type={"text"}
                  placeholder={"Enter Incentive"}
                />
              </div>
              <div className="mb-3">
                <FormLabel
                  htmlfor={"netdeposit"}
                  label="Net Deposit (Monthly)"
                />
                <FormInput
                  id="netdeposit"
                  type={"text"}
                  placeholder={"Enter Net Deposit"}
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

export default AddMarketing;
