import { useState } from "react";
import "./App.css";
import AdminDashboard from "pages/admin/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import IBTreeChart from "pages/admin/ib-management/ib-tree-chart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route
                path="/admin/managementdashboard"
                element={<ManagerDashboard />}
              />
              <Route path="/admin/usermanagement">
                <Route path="adduser" element={<AddUser />} />
                <Route path="userlist" element={<UserList />} />
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
              <Route path="/admin/ibmanagment">
                <Route path="ibuserlist" element={<IBUserList />} />
                <Route path="ibrequestlist" element={<IBRequestList />} />
                <Route path="ibplanlist" element={<IBPlanList />} />
                <Route path="treetest/:id" element={<IBTreeChart />} />
              </Route>
              <Route path="/admin/groupmanagement">
                <Route path="addgroup" element={<AddGroup />} />
                <Route path="updatemt5group" element={<UpdateMt5Group />} />
              </Route>
              <Route path="/admin/transaction">
                <Route path="clientdeposit" element={<ClientDeposit />} />
                <Route path="clientwithdraw" element={<ClientWithdraw />} />
                <Route path="ibwithdraw" element={<IBWithdraw />} />
                <Route path="internaltransfer" element={<InternalTransfer />} />
              </Route>
              <Route path="/admin/marketing">
                <Route path="addmarketing" element={<AddMarketing />} />
              </Route>
              <Route path="/admin/subadmin">
                <Route path="createsubadmin" element={<CreateSubAdmin />} />
              </Route>
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
