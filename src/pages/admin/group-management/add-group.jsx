import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import React from "react";

const AddGroup = () => {
  return (
    <>
      <ContentLayout
        title={"Add Group"}
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Group Management", link: "#" },
          { name: "Add Group", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="xl:grid xl:grid-cols-1 xl:gap-4">
                <div className="mb-3">
                  <CustomFormLabel htmlfor={"name"} label="Name" compulsory />
                  <FormInput type="text" id="name" placeholder={"Enter Name"} />
                </div>
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"mtgroup"}
                    label="MT5 Group"
                    compulsory
                  />
                  <FormInput
                    type="text"
                    id="mtgroup"
                    placeholder={"Enter MT5 Group"}
                  />
                </div>
                <div className="mb-3">
                  <CustomFormLabel
                    htmlfor={"status"}
                    label="Select Status"
                    compulsory
                  />
                  <FormSelectSearch
                    data={[
                      {
                        value: 0,
                        label: "Inactive",
                      },
                      {
                        value: 1,
                        label: "Active",
                      },
                    ]}
                    emptyText={"No Status Found"}
                    margin
                    width={"w-[350px] md:w-[530px]"}
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

export default AddGroup;
