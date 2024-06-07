import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormFileInput from "components/common/form-file-input";
import FormInput from "components/common/form-input";
import FormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const InternalTransfer = () => {
  return (
    <>
      <ContentLayout
        title={"Internal Transfer"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Transaction", link: "#" },
          { name: "Internal Transfer", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-3">
                  <FormLabel
                    htmlfor={"fromaccount"}
                    label="Select Account From"
                  />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No Accounts Found"}
                    margin
                    width={"w-[530px]"}
                  />
                </div>
                <div className="mb-3">
                  <FormLabel htmlfor={"toaccount"} label="Select Account To" />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No Accounts Found"}
                    margin
                    width={"w-[530px]"}
                  />
                </div>
                {/* <div className="mb-3">
                  <FormLabel htmlfor={"depositproof"} label="" />
                  <FormFileInput id={"depositproof"} />
                </div> */}
                <div className="mb-3">
                  <FormLabel htmlfor={"amount"} label="Amount" />
                  <FormInput
                    id="amount"
                    type={"text"}
                    placeholder={"Enter Amount"}
                  />
                </div>
                <div className="mb-3">
                  <FormLabel htmlfor={"comment"} label="Comment" />
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

export default InternalTransfer;
