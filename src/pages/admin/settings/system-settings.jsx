import AdminCard from "components/admindashboard/common/admin-form";
import { ContentLayout } from "components/admindashboard/common/content-layout";
import RichTextEditor from "components/admindashboard/common/text-editor";
import FormFileInput from "components/common/form-file-input";
import FormInput from "components/common/form-input";
import CustomFormLabel from "components/common/form-label";
import FormSelectSearch from "components/common/form-select-search";
import { Button } from "components/ui/button";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import React, { useContext } from "react";
import { SettingsSwitchCard } from "./default-settings";

const SystemSettings = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ContentLayout
        title="System Settings"
        breadcrumb={[
          { name: "Dashboard", link: "/admin/dashboard" },
          { name: "Settings", link: "#" },
          { name: "System Settings", link: "#" },
        ]}
      >
        <div className="grid grid-cols-2 gap-4 mb-5">
          <AdminCard>
            <form>
              <img
                src="/logotechysquad-dark.png"
                width={200}
                className="mb-5"
              />
              <CustomFormLabel
                htmlfor={"mainlogo"}
                label="Upload Main Logo"
                compulsory
              />
              <FormFileInput id={"mainlogo"} />
              <div className="mt-5">
                <Button className="bg-primary hover:bg-secondary text-white">
                  Submit
                </Button>
              </div>
            </form>
          </AdminCard>
          <AdminCard>
            <form>
              <img
                src="/logotechysquad-light.png"
                width={200}
                className="mb-5"
              />
              <CustomFormLabel
                htmlfor={"whitelogo"}
                label="Upload White Logo"
                compulsory
              />
              <FormFileInput id={"whitelogo"} />
              <div className="mt-5">
                <Button className="bg-primary hover:bg-secondary text-white">
                  Submit
                </Button>
              </div>
            </form>
          </AdminCard>
          <AdminCard>
            <form>
              <img
                src="/logotechysquad-dark.png"
                width={200}
                className="mb-5"
              />
              <CustomFormLabel
                htmlfor={"emaillogo"}
                label="Upload Email Logo"
                compulsory
              />
              <FormFileInput id={"emaillogo"} />
              <div className="mt-5">
                <Button className="bg-primary hover:bg-secondary text-white">
                  Submit
                </Button>
              </div>
            </form>
          </AdminCard>
          <AdminCard>
            <form>
              <img
                src="/logotechysquad-dark.png"
                width={200}
                className="mb-5"
              />
              <CustomFormLabel
                htmlfor={"favicon"}
                label="Upload Favicon"
                compulsory
              />
              <FormFileInput id={"favicon"} />
              <div className="mt-5">
                <Button className="bg-primary hover:bg-secondary text-white">
                  Submit
                </Button>
              </div>
            </form>
          </AdminCard>
        </div>

        <AdminCard>
          <h3
            className={cn(
              "text-2xl font-bold",
              theme == "dark" ? "text-textlight" : "text-textdark"
            )}
          >
            IB Settings
          </h3>
          <div className="grid grid-cols-2 gap-4 my-5">
            <SettingsSwitchCard
              id={"ibusertowallet"}
              label="IB to User Wallet"
              description={"Enable to let IB transfer amount to User Wallet"}
            />
            <div>
              <CustomFormLabel
                htmlfor={"iblevels"}
                label="IB Levels (One Time)"
                compulsory
              />
              <FormInput
                id="iblevels"
                type={"text"}
                placeholder={"No. of IB Levels"}
              />
              <small className="text-slate-400">
                Set Default No of IB Levels for System
              </small>
            </div>
          </div>
          <div>
            <CustomFormLabel
              htmlfor={"iblevels"}
              label="IB Terms and Conditions"
              compulsory
            />
            <RichTextEditor />
            <small className="text-slate-400">
              Set Terms and Conditions for a User to become IB.
            </small>
          </div>
          <div className="mt-5">
            <Button className="bg-primary hover:bg-secondary text-white">
              Submit
            </Button>
          </div>
        </AdminCard>

        <div className="mt-5">
          <AdminCard>
            <h3
              className={cn(
                "text-2xl font-bold",
                theme == "dark" ? "text-textlight" : "text-textdark"
              )}
            >
              CRM Settings
            </h3>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"crmphone"}
                  label="CRM Phone Number"
                  compulsory
                />
                <FormInput
                  id="crmphone"
                  type={"number"}
                  placeholder={"Enter CRM Phone"}
                />
              </div>
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"crmemail"}
                  label="CRM Email"
                  compulsory
                />
                <FormInput
                  id="crmemail"
                  type={"email"}
                  placeholder={"Enter CRM Email"}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-3">
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"desktopUrl"}
                  label="MT5 Desktop URL"
                  compulsory
                />
                <FormInput
                  id="desktopUrl"
                  type={"text"}
                  placeholder={"Enter URL"}
                />
              </div>
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"androidUrl"}
                  label="MT5 Android URL"
                />
                <FormInput
                  id="androidUrl"
                  type={"text"}
                  placeholder={"Enter URL"}
                />
              </div>
              <div className="mb-3">
                <CustomFormLabel htmlfor={"iosUrl"} label="MT5 IOS URL" />
                <FormInput
                  id="iosUrl"
                  type={"text"}
                  placeholder={"Enter URL"}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-3">
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"logintext"}
                  label="Login Text"
                  compulsory
                />
                <FormInput
                  id="logintext"
                  type={"text"}
                  placeholder={"Enter Text"}
                />
              </div>
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"registertext"}
                  label="Register Text"
                />
                <FormInput
                  id="registertext"
                  type={"text"}
                  placeholder={"Enter Text"}
                />
              </div>
              <div className="mb-3">
                <CustomFormLabel htmlfor={"footertext"} label="Footer Text" />
                <FormInput
                  id="footertext"
                  type={"text"}
                  placeholder={"Enter Text"}
                />
              </div>
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"kyccondition"}
                  label="KYC Condition"
                />
                <FormSelectSearch
                  data={[]}
                  emptyText={"No Conditions Found"}
                  margin
                />
              </div>
              <div className="mb-3">
                <CustomFormLabel htmlfor={"group"} label="Group" />
                <FormSelectSearch
                  data={[]}
                  emptyText={"No Group Found"}
                  margin
                />
              </div>
              <div className="mb-3">
                <CustomFormLabel htmlfor={"leverage"} label="Leverage" />
                <FormSelectSearch
                  data={[]}
                  emptyText={"No Leverage Found"}
                  margin
                />
              </div>
            </div>
            <h4
              className={cn(
                "text-xl font-bold mt-5",
                theme == "dark" ? "text-textlight" : "text-textdark"
              )}
            >
              Google OAuth Details
            </h4>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="mb-3">
                <CustomFormLabel htmlfor={"googleclientid"} label="Client ID" />
                <FormInput
                  id="googleclientid"
                  type={"text"}
                  placeholder={"Enter Client Id"}
                />
              </div>
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"googlesecretkey"}
                  label="Secret Key"
                />
                <FormInput
                  id="googlesecretkey"
                  type={"number"}
                  placeholder={"Enter Secret Key"}
                />
              </div>
            </div>

            <h4
              className={cn(
                "text-xl font-bold mt-5",
                theme == "dark" ? "text-textlight" : "text-textdark"
              )}
            >
              Tidio Chatbot Details
            </h4>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="mb-3">
                <CustomFormLabel
                  htmlfor={"googleclientid"}
                  label="Chatbot ID"
                />
                <FormInput
                  id="tidiochatbotid"
                  type={"text"}
                  placeholder={"Enter Chatbot Id"}
                />
              </div>
            </div>
            <div className="mt-5">
              <Button className="bg-primary hover:bg-secondary text-white">
                Submit
              </Button>
            </div>
          </AdminCard>
        </div>
      </ContentLayout>
    </>
  );
};

export default SystemSettings;
