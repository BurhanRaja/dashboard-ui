import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormFileInput from "components/common/form-file-input";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const ClientDeposit = () => {
  return (
    <>
      <ContentLayout
        title={"Client Deposit"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Transaction", link: "#" },
          { name: "Client Depsoit", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="xl:grid xl:grid-cols-1 xl:gap-4">
                <div className="mb-3">
                  <CustomFormLabel htmlfor={"users"} label="Select User" compulsory />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No User Found"}
                    margin
                    width={"w-[350px] md:w-[530px]"}
                  />
                </div>
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"depositTo"}
                    label="Deposit To"
                    compulsory
                  />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No Results Found"}
                    margin
                    width={"w-[350px] md:w-[530px]"}
                  />
                </div>
                {/* <div className="mb-3">
                  <CustomFormLabel htmlfor={"depositproof"} label="" />
                  <FormFileInput id={"depositproof"} />
                </div> */}
                <div className="mb-3">
                  <CustomFormLabel htmlfor={"amount"} label="Amount" compulsory />
                  <FormInput
                    id="amount"
                    type={"text"}
                    placeholder={"Enter Amount"}
                  />
                </div>
                <div className="mb-3">
                  <CustomFormLabel htmlfor={"comment"} label="Comment" compulsory />
                  <FormInput
                    id="comment"
                    type={"text"}
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

export default ClientDeposit;
