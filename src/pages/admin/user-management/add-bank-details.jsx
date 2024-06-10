import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormFileInput from "components/common/form-file-input";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const AddBankDetails = () => {
  return (
    <ContentLayout
      title={"Add Bank Details"}
      breadcrumb={[
        { name: "Dashboard", link: "/admin/dashboard" },
        { name: "User Management", link: "#" },
        { name: "Add Bank Details", link: "#" },
      ]}
    >
      <AdminCard>
        <form>
          <div className="grid grid-cols-3 gap-4">
            <div className="mb-3">
              <CustomFormLabel htmlfor={"users"} label="Select User" />
              <FormSelectSearch data={[]} emptyText={"No User Found"} margin />
            </div>
            <div className="mb-3">
              <CustomFormLabel
                htmlfor={"accountname"}
                label="Account Name"
                compulsory
              />
              <FormInput
                id="accountname"
                type={"text"}
                placeholder={"Enter Account Name"}
              />
            </div>
            <div className="mb-3">
              <CustomFormLabel htmlfor={"accountno"} label="Account No." compulsory />
              <FormInput
                id="accountno"
                type={"text"}
                placeholder={"Enter Account No."}
              />
            </div>
            <div className="mb-3">
              <CustomFormLabel htmlfor={"ifsc"} label="IFSC/Swift Code" compulsory />
              <FormInput
                id="ifsc"
                type={"text"}
                placeholder={"Enter IFSC/Swift Code"}
              />
            </div>
            <div className="mb-3">
              <CustomFormLabel htmlfor={"iban"} label="IBAN" />
              <FormInput id="iban" type={"text"} placeholder={"IBan"} />
            </div>
            <div className="mb-3">
              <CustomFormLabel htmlfor={"bankname"} label="Bank Name" compulsory />
              <FormInput
                id="bankname"
                type={"text"}
                placeholder={"Enter Bank Name"}
              />
            </div>
            <div className="mb-3">
              <CustomFormLabel htmlfor={"bankaddress"} label="Bank Address" />
              <FormInput
                id="bankaddress"
                type={"text"}
                placeholder={"Enter Bank Address"}
              />
            </div>
            <div className="mb-3">
              <CustomFormLabel htmlfor={"country"} label="Country" compulsory />
              <FormSelectSearch
                data={[]}
                emptyText={"No Country Found"}
                margin
              />
            </div>
            <div className="mb-3">
              <CustomFormLabel htmlfor={"bookbank"} label="Book Bank" compulsory />
              <FormFileInput id={"bookbank"} />
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
  );
};

export default AddBankDetails;
