import { useState } from "react";
import "./App.css";
import AdminDashboard from "pages/admin/dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ThemeProvider from "providers/ThemeProvider";
import ManagerDashboard from "pages/admin/manager-dashboard";
import Layout from "components/admindashboard/common/main-layout";
import AddUser from "pages/admin/user-management/add-user";
import UserList from "pages/admin/user-management/user-list";
import CreateMt5Account from "pages/admin/user-management/create-mt5-account";
import UploadUserDocument from "pages/admin/user-management/upload-user-document";
import AddBankDetails from "pages/admin/user-management/add-bank-details";
import ChangeUserPassword from "pages/admin/user-management/change-user-password";
import AddExisitingClient from "pages/admin/user-management/add-exisiting-client";
import ChangeMt5Password from "pages/admin/user-management/change-mt5-password";
import UpdateMt5Leverage from "pages/admin/user-management/update-leverage";
import ResendEmailVerification from "pages/admin/user-management/resend-email-verification";
import ResendMT5AccountDetails from "pages/admin/user-management/resend-mt5-account-details";
import GiveBonus from "pages/admin/bonus/give-bonus";
import RemoveBonus from "pages/admin/bonus/remove-bonus";
import AddGroup from "pages/admin/group-management/add-group";
import UpdateMt5Group from "pages/admin/group-management/update-mt5-group";
import InternalTransfer from "pages/admin/transaction/internal-transfer";
import IBWithdraw from "pages/admin/transaction/ib-withdraw";
import ClientWithdraw from "pages/admin/transaction/client-withdraw";
import ClientDeposit from "pages/admin/transaction/client-deposit";
import AddMarketing from "pages/admin/marketing/add-marketing";
import CreateSubAdmin from "pages/admin/sub-admin/create-sub-admin";
import Mt5UserList from "pages/admin/user-management/mt5-user-list";
import FollowUpList from "pages/admin/user-management/follow-up-list";
import PendingDocumentList from "pages/admin/user-management/pending-document-list";
import ApprovedDocumentList from "pages/admin/user-management/approved-document-list";
import BankDetailsList from "pages/admin/user-management/bank-details-list";
import UserPasswordList from "pages/admin/user-management/user-password-list";
import BonusList from "pages/admin/bonus/bonus-list";
import IBUserList from "pages/admin/ib-management/ib-user-list";
import IBRequestList from "pages/admin/ib-management/ib-request-list";
import IBPlanList from "pages/admin/ib-management/ib-plan-list";
import IBTreeChart from "pages/admin/ib-management/ib-user/ib-tree-chart";
import IBPlanAdd from "pages/admin/ib-management/ib-plan/ib-plan-add";
import IBCommissionGroupList from "pages/admin/ib-management/ib-commission-group-list";
import SetIBCommissionList from "pages/admin/ib-management/set-ib-commission";
import MoveIBToClient from "pages/admin/ib-management/move-ib-to-client";
import GroupList from "pages/admin/group-management/group-list";
import PromotionList from "pages/admin/settings/promotion-list";
import DefaultSettings from "pages/admin/settings/default-settings";
import UserSettings from "pages/admin/user-management/user/user-settings";
import SystemSettings from "pages/admin/settings/system-settings";
import SendMail from "pages/admin/send-mail";
import EditUser from "pages/admin/user-management/user/edit-user";
import UserDetails from "pages/admin/user-management/user/user-details";
import PendingDepositList from "pages/admin/transaction/pending-deposit-list";
import PendingWithdrawList from "pages/admin/transaction/pending-withdraw-list";
import DepositReportList from "pages/admin/report/deposit-report-list";
import WithdrawReportList from "pages/admin/report/withdraw-report-list";
import PendingIbwithdrawList from "pages/admin/transaction/pending-ibwithdraw-list";
import MarketingList from "pages/admin/marketing/marketing-list";
import BackgroundBeams from "components/common/animation/bg-animation";
import Login from "pages/admin/auth/login";
import Register from "pages/admin/auth/register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          {/* <Layout> */}
          <Routes>
            <Route path="/" element={<Navigate to={"/admin/login"} />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/register" element={<Register />} />
            <Route element={<Layout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route
                path="/admin/managementdashboard"
                element={<ManagerDashboard />}
              />
              <Route path="/admin/sendmail" element={<SendMail />} />
              <Route path="/admin/usermanagement">
                <Route path="adduser" element={<AddUser />} />
                <Route path="userlist" element={<UserList />} />
                <Route path="edituser/:id" element={<EditUser />} />
                <Route path="userdetails/:id" element={<UserDetails />} />
                <Route path="usersettings/:id" element={<UserSettings />} />
                <Route path="mt5userlist" element={<Mt5UserList />} />
                <Route path="followuplist" element={<FollowUpList />} />
                <Route
                  path="pendingdocumentlist"
                  element={<PendingDocumentList />}
                />
                <Route
                  path="approveddocumentlist"
                  element={<ApprovedDocumentList />}
                />
                <Route
                  path="uploaduserdocument"
                  element={<UploadUserDocument />}
                />
                <Route path="addbankdetails" element={<AddBankDetails />} />
                <Route path="bankdetailslist" element={<BankDetailsList />} />
                <Route path="createmt5account" element={<CreateMt5Account />} />
                <Route path="userpasswordList" element={<UserPasswordList />} />
                <Route
                  path="changeuserpassword"
                  element={<ChangeUserPassword />}
                />
                <Route
                  path="addexistingclient"
                  element={<AddExisitingClient />}
                />
                <Route
                  path="changemt5password"
                  element={<ChangeMt5Password />}
                />
                <Route
                  path="updatemt5leverage"
                  element={<UpdateMt5Leverage />}
                />
                <Route
                  path="resendemailverification"
                  element={<ResendEmailVerification />}
                />
                <Route
                  path="resendmt5accountdetails"
                  element={<ResendMT5AccountDetails />}
                />
              </Route>
              <Route path="/admin/bonus">
                <Route path="givebonus" element={<GiveBonus />} />
                <Route path="removebonus" element={<RemoveBonus />} />
                <Route path="bonuslist" element={<BonusList />} />
              </Route>
              <Route path="/admin/ibmanagement">
                <Route path="ibuserlist" element={<IBUserList />} />
                <Route path="ibrequestlist" element={<IBRequestList />} />
                <Route path="ibplanlist" element={<IBPlanList />} />
                <Route path="treetest/:id" element={<IBTreeChart />} />
                <Route path="addibplan" element={<IBPlanAdd />} />
                <Route
                  path="ibcommissiongroup"
                  element={<IBCommissionGroupList />}
                />
                <Route
                  path="setibcommission"
                  element={<SetIBCommissionList />}
                />
                <Route path="moveclienttoib" element={<MoveIBToClient />} />
              </Route>
              <Route path="/admin/groupmanagement">
                <Route path="addgroup" element={<AddGroup />} />
                <Route path="updatemt5group" element={<UpdateMt5Group />} />
                <Route path="grouplist" element={<GroupList />} />
              </Route>
              <Route path="/admin/transaction">
                <Route path="clientdeposit" element={<ClientDeposit />} />
                <Route path="clientwithdraw" element={<ClientWithdraw />} />
                <Route path="ibwithdraw" element={<IBWithdraw />} />
                <Route path="internaltransfer" element={<InternalTransfer />} />
                <Route
                  path="pendingdepositlist"
                  element={<PendingDepositList />}
                />
                <Route
                  path="pendingwithdrawlist"
                  element={<PendingWithdrawList />}
                />
                <Route
                  path="pendingibwithdrawlist"
                  element={<PendingIbwithdrawList />}
                />
              </Route>
              <Route path="/admin/marketing">
                <Route path="addmarketing" element={<AddMarketing />} />
                <Route path="marketinglist" element={<MarketingList />} />
              </Route>
              <Route path="/admin/report">
                <Route path="depositreport" element={<DepositReportList />} />
                <Route path="withdrawreport" element={<WithdrawReportList />} />
              </Route>
              <Route path="/admin/settings">
                <Route path="promotionlist" element={<PromotionList />} />
                <Route path="defaultsettings" element={<DefaultSettings />} />
                <Route path="systemsettings" element={<SystemSettings />} />
              </Route>
              <Route path="/admin/subadmin">
                <Route path="createsubadmin" element={<CreateSubAdmin />} />
              </Route>
              <Route path="/background" element={<BackgroundBeams />} />
            </Route>
          </Routes>
          {/* </Layout> */}
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
