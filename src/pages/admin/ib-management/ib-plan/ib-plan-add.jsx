import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import { Button } from "components/ui/button";
import React from "react";

const IBPlanAdd = () => {
  return (
    <>
      <ContentLayout
        title={"Add Plan"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "IB Management", link: "#" },
          { name: "IB Plan List", link: "#" },
          { name: "Add Plan", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-3">
                  <CustomFormLabel htmlfor={"name"} label="Plan Name" />
                  <FormInput
                    id="name"
                    type={"text"}
                    placeholder={"Enter Name"}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
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

export default IBPlanAdd;
