import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import RichTextEditor from "components/admindashboard/common/text-editor";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const SendMail = () => {
  return (
    <>
      <ContentLayout
        title="Send Mail"
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Send Mail", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"users"}
                    label="Select User"
                    compulsory
                  />
                  <FormSelectSearch
                    data={[]}
                    emptyText={"No User Found"}
                    margin
                    width={"w-[530px]"}
                  />
                </div>
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"subject"}
                    label="Subject"
                    compulsory
                  />
                  <FormInput
                    id="subject"
                    type={"text"}
                    placeholder={"Enter Subject"}
                  />
                </div>
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"bodytext"}
                    label="Body Text"
                    compulsory
                  />
                  <RichTextEditor />
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

export default SendMail;
