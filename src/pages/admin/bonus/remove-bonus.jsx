import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const RemoveBonus = () => {
  return (
    <>
      <ContentLayout
        title={"Remove Bonus"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Bonus", link: "#" },
          { name: "Remove Bonus", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"account"}
                    label="Select Account"
                    compulsory
                  />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No Account Found"}
                    margin
                    width={"w-[530px]"}
                  />
                </div>
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"amount"}
                    label="Amount"
                    compulsory
                  />
                  <FormInput
                    type="text"
                    id="amount"
                    placeholder={"Enter Amount"}
                  />
                </div>
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"comment"}
                    label="Comment"
                    compulsory
                  />
                  <FormInput
                    type="text"
                    id="comment"
                    placeholder={"Enter Comment"}
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

export default RemoveBonus;
