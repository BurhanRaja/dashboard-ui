import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import FormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const GiveBonus = () => {
  return (
    <>
      <ContentLayout
        title={"Give Bonus"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Bonus", link: "#" },
          { name: "Give Bonus", link: "#" },
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
                <div className="mb-3">
                  <FormLabel htmlfor={"amount"} label="Amount" />
                  <FormInput type="text" id="amount" placeholder={"Enter Amount"} />
                </div>
                <div className="mb-3">
                  <FormLabel htmlfor={"comment"} label="Comment" />
                  <FormInput type="text" id="comment" placeholder={"Enter Comment"} />
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

export default GiveBonus;
