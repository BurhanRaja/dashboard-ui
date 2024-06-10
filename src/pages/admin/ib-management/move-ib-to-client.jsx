import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import CustomFormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const MoveIBToClient = () => {
  return (
    <>
      <ContentLayout
        title={"Move Client to IB"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "IB Management", link: "#" },
          { name: "Move Client to IB", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"user"}
                    label="Select User"
                    compulsory
                  />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No User Found"}
                    margin
                  />
                </div>
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"ib"}
                    label="Select IB"
                    compulsory
                  />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No Marketing Found"}
                    margin
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

export default MoveIBToClient;
