import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import CustomFormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const UpdateMt5Leverage = () => {
  return (
    <>
      <ContentLayout
        title={"Update MT5 Leverage"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Management", link: "#" },
          { name: "Update MT5 Leverage", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-3">
                  <CustomFormLabel htmlfor={"account"} label="Select Account" compulsory />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No Account Found"}
                    margin
                    width={"w-[530px]"}
                  />
                </div>
                <div className="mb-3">
                  <CustomFormLabel htmlfor={"leverage"} label="Select Leverage" compulsory />
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

export default UpdateMt5Leverage;
