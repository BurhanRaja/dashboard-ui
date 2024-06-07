import React from "react";
// View Options
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "components/ui/button";
import { cn } from "lib/utils";

const DataTableViewFilter = ({ table, theme }) => {
  return (
    <>
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "ml-auto hidden h-9 p-4 lg:flex",
                theme == "dark"
                  ? "bg-slate-900 border-slate-800 text-white"
                  : "bg-slate-100"
              )}
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              View
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className={cn(
              "w-[170px]",
              theme == "dark"
                ? "bg-gray-950 text-white border-gray-950"
                : "bg-white"
            )}
          >
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter(
                (column) =>
                  typeof column.accessorFn !== "undefined" &&
                  column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id == "mt5id"
                      ? "MT5 ID"
                      : column.id == "usertype"
                      ? "User Type"
                      : column.id == "accountnumber"
                      ? "Account Number"
                      : column.id == "account_no"
                      ? "MT5 ID"
                      : column.id == "investorpassword"
                      ? "Investor Password"
                      : column.id == "mainpassword"
                      ? "Main Password"
                      : column.id == "groupname"
                      ? "Group"
                      : column.id == "ib_status"
                      ? "IB Status"
                      : column.id == "login_verified"
                      ? "Email Verified"
                      : column.id == "kyc_verified"
                      ? "KYC Verified"
                      : column.id == "createdAt"
                      ? "Registeration Date"
                      : column.id == "wallet_balance"
                      ? "Wallet Balance"
                      : column.id == "ibname"
                      ? "IB Name"
                      : column.id == "otp_enabled"
                      ? "Google 2FA"
                      : column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    </>
  );
};

export default DataTableViewFilter;
