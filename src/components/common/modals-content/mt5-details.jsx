import { cn } from "lib/utils";
import React, { useEffect, useState } from "react";

const MT5Details = ({ id, checkOpen, theme }) => {
  const [data, setData] = useState({});

  const handleGetAccount = (id) => {
    let dataNew = {
      Login: 297487,
      "Currency Digits": 2,
      createdAt: "2024-06-10",
      "Margin Leverage": 500,
      Leverage: 500,
      Credit: 50,
      Profit: 0.0,
      Assets: 0,
      Margin: 0,
      Equity: 500.4,
      "Equity Prev Day": 0,
      Balance: 500.4,
    };
    setData(dataNew);
  };

  useEffect(() => {
    handleGetAccount();
  }, [checkOpen]);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="mb-2 flex justify-between items-center px-1 mx-1 md:px-6 md:mx-7 text-xs md:text-sm">
          <span
            className={cn(
              "font-semibold",
              theme == "dark" ? "text-slate-400" : "text-slate-800"
            )}
          >
            Login :
          </span>
          <span className={cn(theme == "dark" ? "" : "text-black")}>{data["Login"]}</span>
        </div>
        <div className="mb-2 flex justify-between items-center px-1 mx-1 md:px-6 md:mx-7 text-xs md:text-sm">
          <span
            className={cn(
              "font-semibold",
              theme == "dark" ? "text-slate-400" : "text-slate-800"
            )}
          >
            Currency Digits :
          </span>
          <span className={cn(theme == "dark" ? "" : "text-black")}>{data["Currency Digits"]}</span>
        </div>
        <div className="mb-2 flex justify-between items-center px-1 mx-1 md:px-6 md:mx-7 text-xs md:text-sm">
          <span
            className={cn(
              "font-semibold",
              theme == "dark" ? "text-slate-400" : "text-slate-800"
            )}
          >
            Created At :
          </span>
          <span className={cn(theme == "dark" ? "" : "text-black")}>{data["createdAt"]}</span>
        </div>
        <div className="mb-2 flex justify-between items-center px-1 mx-1 md:px-6 md:mx-7 text-xs md:text-sm">
          <span
            className={cn(
              "font-semibold",
              theme == "dark" ? "text-slate-400" : "text-slate-800"
            )}
          >
            Balance :
          </span>
          <span className={cn(theme == "dark" ? "" : "text-black")}>{data["Balance"]}</span>
        </div>
        <div className="mb-2 flex justify-between items-center px-1 mx-1 md:px-6 md:mx-7 text-xs md:text-sm">
          <span
            className={cn(
              "font-semibold",
              theme == "dark" ? "text-slate-400" : "text-slate-800"
            )}
          >
            Margin Leverage :
          </span>
          <span className={cn(theme == "dark" ? "" : "text-black")}>{data["Margin Leverage"]}</span>
        </div>
        <div className="mb-2 flex justify-between items-center px-1 mx-1 md:px-6 md:mx-7 text-xs md:text-sm">
          <span
            className={cn(
              "font-semibold",
              theme == "dark" ? "text-slate-400" : "text-slate-800"
            )}
          >
            Leverage :
          </span>
          <span className={cn(theme == "dark" ? "" : "text-black")}>{data["Leverage"]}</span>
        </div>
        <div className="mb-2 flex justify-between items-center px-1 mx-1 md:px-6 md:mx-7 text-xs md:text-sm">
          <span
            className={cn(
              "font-semibold",
              theme == "dark" ? "text-slate-400" : "text-slate-800"
            )}
          >
            Credit :
          </span>
          <span className={cn(theme == "dark" ? "" : "text-black")}>{data["Credit"]}</span>
        </div>
        <div className="mb-2 flex justify-between items-center px-1 mx-1 md:px-6 md:mx-7 text-xs md:text-sm">
          <span
            className={cn(
              "font-semibold",
              theme == "dark" ? "text-slate-400" : "text-slate-800"
            )}
          >
            Profit :
          </span>
          <span className={cn(theme == "dark" ? "" : "text-black")}>{data["Profit"]}</span>
        </div>
        <div className="mb-2 flex justify-between items-center px-1 mx-1 md:px-6 md:mx-7 text-xs md:text-sm">
          <span
            className={cn(
              "font-semibold",
              theme == "dark" ? "text-slate-400" : "text-slate-800"
            )}
          >
            Assets :
          </span>
          <span className={cn(theme == "dark" ? "" : "text-black")}>{data["Assets"]}</span>
        </div>
        <div className="mb-2 flex justify-between items-center px-1 mx-1 md:px-6 md:mx-7 text-xs md:text-sm">
          <span
            className={cn(
              "font-semibold",
              theme == "dark" ? "text-slate-400" : "text-slate-800"
            )}
          >
            Margin :
          </span>
          <span className={cn(theme == "dark" ? "" : "text-black")}>{data["Margin"]}</span>
        </div>
        <div className="mb-2 flex justify-between items-center px-1 mx-1 md:px-6 md:mx-7 text-xs md:text-sm">
          <span
            className={cn(
              "font-semibold",
              theme == "dark" ? "text-slate-400" : "text-slate-800"
            )}
          >
            Equity :
          </span>
          <span className={cn(theme == "dark" ? "" : "text-black")}>{data["Equity"]}</span>
        </div>
        <div className="mb-2 flex justify-between items-center px-1 mx-1 md:px-6 md:mx-7 text-xs md:text-sm">
          <span
            className={cn(
              "font-semibold",
              theme == "dark" ? "text-slate-400" : "text-slate-800"
            )}
          >
            Equity Prev Day :
          </span>
          <span className={cn(theme == "dark" ? "" : "text-black")}>{data["Equity Prev Day"]}</span>
        </div>
      </div>
    </>
  );
};

export default MT5Details;
