import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import { Button } from "components/ui/button";
import React from "react";

const AddMarketing = () => {
  return (
    <>
      <ContentLayout
        title={"Add User"}
        breadcrumb={[
          { name: "Dashboard", link: "#" },
          { name: "User Management", link: "#" },
          { name: "Add User", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-3">
                <CustomFormLabel htmlfor={"name"} label="Name" compulsory />
                <FormInput id="name" type={"text"} placeholder={"Enter Name"} />
              </div>
              <div className="mb-3">
                <CustomFormLabel htmlfor={"email"} label="Email" compulsory />
                <FormInput
                  id="email"
                  type={"email"}
                  placeholder={"Enter Email"}
                />
              </div>
              <div className="mb-3">
                <CustomFormLabel htmlfor={"password"} label="Password" compulsory />
                <FormInput
                  id="password"
                  type={"password"}
                  placeholder={"Enter Password"}
                />
              </div>
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"incentive"}
                  label="Incentive (%)"
                  compulsory
                />
                <FormInput
                  id="incentive"
                  type={"text"}
                  placeholder={"Enter Incentive"}
                />
              </div>
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"lots"}
                  label="Net Lots (Monthly)"
                  compulsory
                />
                <FormInput id="lots" type={"text"} placeholder={"Enter Lots"} />
              </div>
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"netdeposit"}
                  label="Net Deposit (Monthly)"
                  compulsory
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
