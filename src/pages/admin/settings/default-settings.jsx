import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import { Button } from "components/ui/button";
import { Switch } from "components/ui/switch";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import React, { useContext } from "react";

export const SettingsSwitchCard = ({
  id,
  description,
  label,
  switchCheck,
  setSwitchCheck,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={cn(
        "flex items-center justify-between p-3 border rounded-md",
        theme == "dark" ? "border-slate-800" : "border-slate-300 "
      )}
    >
      <div>
        <CustomFormLabel htmlfor={id} label={label} textbig />
        <br></br>
        <small className="text-slate-400">{description}</small>
      </div>
      <Switch
        id={id}
        className={cn(
          "data-[state=checked]:bg-success  focus-visible:ring-0 focus-visible:ring-offset-0",
          theme == "dark"
            ? "data-[state=unchecked]:bg-slate-800"
            : "data-[state=unchecked]:bg-slate-300"
        )}
        pointerColor="bg-slate-50"
        checked={switchCheck}
        onChange={(e) => setSwitchCheck(e.target.checked)}
      />
    </div>
  );
};

const DefaultSettings = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ContentLayout
        title="Default Settings"
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Settings", link: "#" },
          { name: "Default Settings", link: "#" },
        ]}
      >
        <AdminCard>
          <form>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-5">
              {/* Deposit */}
              <SettingsSwitchCard
                id={"disabledepsoit"}
                label={"Deposit Disable"}
                description={"This will disable New User to do Deposits"}
              />
              <SettingsSwitchCard
                id={"disablewithdraw"}
                label={"Withdraw Disable"}
                description={"This will disable New User to do Withdraws"}
              />
              <SettingsSwitchCard
                id={"disabletransfer"}
                label={"Internal Transfer Disable"}
                description={
                  "This will disable New User to do Internal Transfers"
                }
              />
              <SettingsSwitchCard
                id={"disableopenaccount"}
                label={"Open Account Disable"}
                description={"This will disable New User to do Open Account"}
              />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="">
                <CustomFormLabel
                  htmlfor={"userdeposit"}
                  label="User Deposits"
                  compulsory
                />
                <FormInput
                  id="userdeposit"
                  type={"text"}
                  placeholder={"No. of Deposits"}
                />
                <small className="text-xs text-slate-400">
                  Max. Deposit Limit a User can do daily
                </small>
              </div>
              <div className="">
                <CustomFormLabel
                  htmlfor={"userwithdraw"}
                  label="User Withdraws"
                  compulsory
                />
                <FormInput
                  id="userwithdraw"
                  type={"text"}
                  placeholder={"No. of Withdraws"}
                />
                <small className="text-xs text-slate-400">
                  Max. Withdraw Limit a User can do daily
                </small>
              </div>
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"usertransfer"}
                  label="User Internal Transfers"
                  compulsory
                />
                <FormInput
                  id="usertransfer"
                  type={"text"}
                  placeholder={"No. of Internal Transfers"}
                />
                <small className="text-xs text-slate-400">
                  Max. Internal Transfers Limit a User can do daily
                </small>
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

export default DefaultSettings;
