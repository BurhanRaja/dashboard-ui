import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import FormLabel from "components/common/form-label";
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
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-3">
                  <FormLabel htmlfor={"name"} label="Name" />
                  <FormInput type="text" id="name" placeholder={"Enter Name"} />
                </div>
                <div className="mb-3">
                  <FormLabel htmlfor={"mtgroup"} label="MT5 Group" />
                  <FormInput
                    type="text"
                    id="mtgroup"
                    placeholder={"Enter MT5 Group"}
                  />
                </div>
                <div className="mb-3">
                  <FormLabel htmlfor={"status"} label="Select Status" />
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

export default AddGroup;
