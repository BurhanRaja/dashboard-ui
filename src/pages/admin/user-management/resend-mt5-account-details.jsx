import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const ResendMT5AccountDetails = () => {
  return (
    <>
      <ContentLayout
        title={"Resend MT5 Account Details"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "User Managment", link: "#" },
          { name: "Resend MT5 Account Details", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-3">
                  <FormLabel htmlfor={"account"} label="Select Account" />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No Account Found"}
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

export default ResendMT5AccountDetails;
