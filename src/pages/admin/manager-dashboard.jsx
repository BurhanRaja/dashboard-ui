import { ContentLayout } from "components/admindashboard/common/content-layout";
import DashCard from "components/common/dash-card";
import CustomDatePicker from "components/common/date-picker";
import SelectSearch from "components/common/select-search";
import CardSimpleTable from "components/admindashboard/managerdashboard/card-simple-table";
import CountryWiseChart from "components/admindashboard/managerdashboard/country-wise-chart";
import { Button } from "components/ui/button";
import { Label } from "components/ui/label";
import ThemeContext from "context/theme-context";
import { cn } from "lib/utils";
import {
  Banknote,
  DollarSign,
  User,
  Dog,
  Cat,
  Turtle,
  Rabbit,
  Fish,
} from "lucide-react";
import React, { useContext, useState } from "react";
// import MultiSelect from "components/admindashboard/common/multi-select-search";

// const frameworksList = [
//   {
//     value: "next.js",
//     label: "Next.js",
//     icon: Dog,
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//     icon: Cat,
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//     icon: Turtle,
//   },
//   {
//     value: "remix",
//     label: "Remix",
//     icon: Rabbit,
//   },
//   {
//     value: "astro",
//     label: "Astro",
//     icon: Fish,
//   },
// ];

const ManagerDashboard = () => {
  const [country, setCountry] = useState("");
  const [marketing, setMarketing] = useState("");
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  //   const [multiSelectData, setMultiSelectData] = useState();


  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ContentLayout
        title={"Management Dashboard"}
        breadcrumb={[
          { name: "Dashboard", link: "#" },
          { name: "Management Dashboard", link: "#" },
        ]}
      >
        <form className="mb-5">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 items-end gap-4">
            <div>
              <Label className={cn(theme == "dark" ? "text-white" : "")}>
                Country
              </Label>
              <SelectSearch
                margin
                data={[
                  {
                    label: "India",
                    value: "India",
                  },
                  {
                    label: "United States",
                    value: "United States",
                  },
                  {
                    label: "United Arab Emirates",
                    value: "United Arab Emirates",
                  },
                ]}
                emptyText={"No Country Found."}
                value={country}
                setValue={(val) => setCountry(val)}
              />
            </div>
            <div>
              <Label className={cn(theme == "dark" ? "text-white" : "")}>
                Marketing
              </Label>
              <SelectSearch
                margin
                data={[
                  {
                    label: "Burhanuddin",
                    value: "10",
                  },
                  {
                    label: "Nikunj",
                    value: "19",
                  },
                  {
                    label: "Jignesh",
                    value: "20",
                  },
                ]}
                emptyText={"No Marketing Found."}
                value={marketing}
                setValue={(val) => setMarketing(val)}
              />
            </div>
            <div>
              <Label className={cn(theme == "dark" ? "text-white" : "")}>
                From
              </Label>
              <CustomDatePicker
                margin
                date={from}
                setDate={(val) => setFrom(val)}
              />
            </div>
            <div>
              <Label className={cn(theme == "dark" ? "text-white" : "")}>
                To
              </Label>
              <CustomDatePicker
                margin
                date={to}
                setDate={(val) => setTo(val)}
              />
            </div>
            <div>
              <Button className="bg-primary text-white text-sm">Submit</Button>
            </div>
          </div>
        </form>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4  mb-5">
          <DashCard
            title={"Total Clients"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-3"
                }
              >
                <User size={20} />
              </Button>
            }
            count={2}
            small={true}
          />
          <DashCard
            title={"Total Deposits"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-3"
                }
              >
                <DollarSign size={20} />
              </Button>
            }
            count={2}
            small={true}
          />
          <DashCard
            title={"Total Withdraws"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-3 px-3"
                }
              >
                <DollarSign size={20} />
              </Button>
            }
            count={2}
            small={true}
          />
          <DashCard
            title={"Net Deposit"}
            icon={
              <Button
                className={
                  "rounded-full bg-darkactive text-lightactive py-6 px-3"
                }
              >
                <Banknote size={25} />
              </Button>
            }
            count={2}
            small={true}
          />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-5">
          <div>
            <CountryWiseChart theme={theme} />
          </div>
          <div>
            <CardSimpleTable
              title={"Top 10 Marketing"}
              theme={theme}
              headerData={[
                {
                  name: "ID",
                  style: "",
                },
                {
                  name: "Name",
                  style: "",
                },
                {
                  name: "Total Deposit",
                  style: "",
                },
                {
                  name: "Total Withdraw",
                  style: "",
                },
              ]}
              bodyData={[
                {
                  id: "1",
                  data: [
                    {
                      name: "1",
                      style: "",
                    },
                    {
                      name: "Burhanuddin Raja",
                      style: "",
                    },
                    {
                      name: "100",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "2",
                  data: [
                    {
                      name: "2",
                      style: "",
                    },
                    {
                      name: "Bijal Makvana",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "3",
                  data: [
                    {
                      name: "3",
                      style: "",
                    },
                    {
                      name: "Jignesh Patel",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "4",
                  data: [
                    {
                      name: "4",
                      style: "",
                    },
                    {
                      name: "Nikunj Tagadiya",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "5",
                  data: [
                    {
                      name: "5",
                      style: "",
                    },
                    {
                      name: "Harsh Soni",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "6",
                  data: [
                    {
                      name: "6",
                      style: "",
                    },
                    {
                      name: "Sneha Tagadiya",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "7",
                  data: [
                    {
                      name: "7",
                      style: "",
                    },
                    {
                      name: "Alpa Pithiya",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "8",
                  data: [
                    {
                      name: "8",
                      style: "",
                    },
                    {
                      name: "Bansi Sakariya",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "9",
                  data: [
                    {
                      name: "9",
                      style: "",
                    },
                    {
                      name: "Parth Rupapara",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "10",
                  data: [
                    {
                      name: "10",
                      style: "",
                    },
                    {
                      name: "Swayam Modi",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-5">
          <div>
            <CardSimpleTable
              title={"Top 10 Depositor"}
              theme={theme}
              headerData={[
                {
                  name: "ID",
                  style: "",
                },
                {
                  name: "Name",
                  style: "",
                },
                {
                  name: "Email",
                  style: "",
                },
                {
                  name: "Total Deposit",
                  style: "",
                },
              ]}
              bodyData={[
                {
                  id: "1",
                  data: [
                    {
                      name: "1",
                      style: "",
                    },
                    {
                      name: "Burhanuddin Raja",
                      style: "",
                    },
                    {
                      name: "burhanuddin@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "2",
                  data: [
                    {
                      name: "2",
                      style: "",
                    },
                    {
                      name: "Bijal Makvana",
                      style: "",
                    },
                    {
                      name: "bijal@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "3",
                  data: [
                    {
                      name: "3",
                      style: "",
                    },
                    {
                      name: "Jignesh Patel",
                      style: "",
                    },
                    {
                      name: "jignesh@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "4",
                  data: [
                    {
                      name: "4",
                      style: "",
                    },
                    {
                      name: "Nikunj Tagadiya",
                      style: "",
                    },
                    {
                      name: "nikunj@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "5",
                  data: [
                    {
                      name: "5",
                      style: "",
                    },
                    {
                      name: "Harsh Soni",
                      style: "",
                    },
                    {
                      name: "harsh@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "6",
                  data: [
                    {
                      name: "6",
                      style: "",
                    },
                    {
                      name: "Sneha Tagadiya",
                      style: "",
                    },
                    {
                      name: "sneha@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "7",
                  data: [
                    {
                      name: "7",
                      style: "",
                    },
                    {
                      name: "Alpa Pithiya",
                      style: "",
                    },
                    {
                      name: "alpa@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "8",
                  data: [
                    {
                      name: "8",
                      style: "",
                    },
                    {
                      name: "Bansi Sakariya",
                      style: "",
                    },
                    {
                      name: "bansi@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "9",
                  data: [
                    {
                      name: "9",
                      style: "",
                    },
                    {
                      name: "Parth Rupapara",
                      style: "",
                    },
                    {
                      name: "parth@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "10",
                  data: [
                    {
                      name: "10",
                      style: "",
                    },
                    {
                      name: "Swayam Modi",
                      style: "",
                    },
                    {
                      name: "swayam@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
              ]}
            />
          </div>
          <div>
            <CardSimpleTable
              title={"Top 10 Withdrawals"}
              theme={theme}
              headerData={[
                {
                  name: "ID",
                  style: "",
                },
                {
                  name: "Name",
                  style: "",
                },
                {
                  name: "Email",
                  style: "",
                },
                {
                  name: "Total Withdraw",
                  style: "",
                },
              ]}
              bodyData={[
                {
                  id: "1",
                  data: [
                    {
                      name: "1",
                      style: "",
                    },
                    {
                      name: "Burhanuddin Raja",
                      style: "",
                    },
                    {
                      name: "burhanuddin@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "2",
                  data: [
                    {
                      name: "2",
                      style: "",
                    },
                    {
                      name: "Bijal Makvana",
                      style: "",
                    },
                    {
                      name: "bijal@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "3",
                  data: [
                    {
                      name: "3",
                      style: "",
                    },
                    {
                      name: "Jignesh Patel",
                      style: "",
                    },
                    {
                      name: "jignesh@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "4",
                  data: [
                    {
                      name: "4",
                      style: "",
                    },
                    {
                      name: "Nikunj Tagadiya",
                      style: "",
                    },
                    {
                      name: "nikunj@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "5",
                  data: [
                    {
                      name: "5",
                      style: "",
                    },
                    {
                      name: "Harsh Soni",
                      style: "",
                    },
                    {
                      name: "harsh@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "6",
                  data: [
                    {
                      name: "6",
                      style: "",
                    },
                    {
                      name: "Sneha Tagadiya",
                      style: "",
                    },
                    {
                      name: "sneha@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "7",
                  data: [
                    {
                      name: "7",
                      style: "",
                    },
                    {
                      name: "Alpa Pithiya",
                      style: "",
                    },
                    {
                      name: "alpa@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "8",
                  data: [
                    {
                      name: "8",
                      style: "",
                    },
                    {
                      name: "Bansi Sakariya",
                      style: "",
                    },
                    {
                      name: "bansi@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "9",
                  data: [
                    {
                      name: "9",
                      style: "",
                    },
                    {
                      name: "Parth Rupapara",
                      style: "",
                    },
                    {
                      name: "parth@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "10",
                  data: [
                    {
                      name: "10",
                      style: "",
                    },
                    {
                      name: "Swayam Modi",
                      style: "",
                    },
                    {
                      name: "swayam@techysquad.com",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-5">
          <div>
            <CardSimpleTable
              title={"Top 10 Winner"}
              theme={theme}
              headerData={[
                {
                  name: "ID",
                  style: "",
                },
                {
                  name: "Name",
                  style: "",
                },
                {
                  name: "Total Profit",
                  style: "",
                },
                {
                  name: "Total Lots",
                  style: "",
                },
              ]}
              bodyData={[
                {
                  id: "1",
                  data: [
                    {
                      name: "1",
                      style: "",
                    },
                    {
                      name: "Burhanuddin Raja",
                      style: "",
                    },
                    {
                      name: "100",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "2",
                  data: [
                    {
                      name: "2",
                      style: "",
                    },
                    {
                      name: "Bijal Makvana",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "3",
                  data: [
                    {
                      name: "3",
                      style: "",
                    },
                    {
                      name: "Jignesh Patel",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "4",
                  data: [
                    {
                      name: "4",
                      style: "",
                    },
                    {
                      name: "Nikunj Tagadiya",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "5",
                  data: [
                    {
                      name: "5",
                      style: "",
                    },
                    {
                      name: "Harsh Soni",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "6",
                  data: [
                    {
                      name: "6",
                      style: "",
                    },
                    {
                      name: "Sneha Tagadiya",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "7",
                  data: [
                    {
                      name: "7",
                      style: "",
                    },
                    {
                      name: "Alpa Pithiya",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "8",
                  data: [
                    {
                      name: "8",
                      style: "",
                    },
                    {
                      name: "Bansi Sakariya",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "9",
                  data: [
                    {
                      name: "9",
                      style: "",
                    },
                    {
                      name: "Parth Rupapara",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "10",
                  data: [
                    {
                      name: "10",
                      style: "",
                    },
                    {
                      name: "Swayam Modi",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
              ]}
            />
          </div>
          <div>
            <CardSimpleTable
              title={"Top 10 Losers"}
              theme={theme}
              headerData={[
                {
                  name: "ID",
                  style: "",
                },
                {
                  name: "Name",
                  style: "",
                },
                {
                  name: "Total Loss",
                  style: "",
                },
                {
                  name: "Total Lots",
                  style: "",
                },
              ]}
              bodyData={[
                {
                  id: "1",
                  data: [
                    {
                      name: "1",
                      style: "",
                    },
                    {
                      name: "Burhanuddin Raja",
                      style: "",
                    },
                    {
                      name: "100",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "2",
                  data: [
                    {
                      name: "2",
                      style: "",
                    },
                    {
                      name: "Bijal Makvana",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "3",
                  data: [
                    {
                      name: "3",
                      style: "",
                    },
                    {
                      name: "Jignesh Patel",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "4",
                  data: [
                    {
                      name: "4",
                      style: "",
                    },
                    {
                      name: "Nikunj Tagadiya",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "5",
                  data: [
                    {
                      name: "5",
                      style: "",
                    },
                    {
                      name: "Harsh Soni",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "6",
                  data: [
                    {
                      name: "6",
                      style: "",
                    },
                    {
                      name: "Sneha Tagadiya",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "7",
                  data: [
                    {
                      name: "7",
                      style: "",
                    },
                    {
                      name: "Alpa Pithiya",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "8",
                  data: [
                    {
                      name: "8",
                      style: "",
                    },
                    {
                      name: "Bansi Sakariya",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "9",
                  data: [
                    {
                      name: "9",
                      style: "",
                    },
                    {
                      name: "Parth Rupapara",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
                {
                  id: "10",
                  data: [
                    {
                      name: "10",
                      style: "",
                    },
                    {
                      name: "Swayam Modi",
                      style: "",
                    },
                    {
                      name: "2400",
                      style: "",
                    },
                    {
                      name: "1500",
                      style: "",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
        {/* <div className="mt-10">
          <MultiSelect
            options={frameworksList}
            onValueChange={setMultiSelectData}
            placeholder="Select options"
            variant="inverted"
          />
        </div> */}
      </ContentLayout>
    </>
  );
};

export default ManagerDashboard;
