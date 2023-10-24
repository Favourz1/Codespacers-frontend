import { Button as AntdButton, Dropdown, Table } from "antd";
import { useState } from "react";
import FilterIcon from "@/assets/icons/filter-icon.svg";
import SettingsIcon from "@/assets/icons/settings-icon.svg";
import { chartData, dataSource, subsDataSource } from "./data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [month, setMonth] = useState(MONTHS[9]);

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center gap-2 justify-between">
        <h1 className="text-[24px] font-bold">Dashboard</h1>

        <div className="flex items-center gap-2">
          <p>Month</p>
          <Dropdown
            placement="bottomRight"
            menu={{
              items: MONTHS.map((m) => ({
                key: m.toLowerCase(),
                label: m,
                onClick: () => setMonth(m),
              })),
            }}
          >
            <AntdButton>{month}</AntdButton>
          </Dropdown>
        </div>
      </header>

      <div className="flex items-start gap-6">
        <section className="grow flex flex-col gap-12">
          <div className="p-8 rounded-[10px] bg-dark flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-white">Current Balance</p>
              <h3 className="text-[32px] font-bold text-white flex items-center gap-1">
                $62,500.24
                <span className="text-[8px] text-[#35D478] bg-primary p-[2px] rounded-[20px]">
                  +25%
                </span>
              </h3>
            </div>

            <div className="flex items-center justify-between gap-3">
              <article className="flex flex-col gap-2">
                <p className="text-sm text-white">Total Income</p>
                <h4 className="text-xl text-white font-bold flex items-center gap-1">
                  $90,510.20
                  <span className="grow text-[8px] leading-[12px] text-[#35D478] bg-primary p-[2px] rounded-[20px]">
                    +25%
                  </span>
                </h4>
              </article>

              <div className="w-[1px] h-[54px] bg-border"></div>

              <article className="flex flex-col gap-2">
                <p className="text-sm text-white">Total Spending</p>
                <h4 className="text-xl text-white font-bold flex items-center gap-1">
                  $90,510.20
                  <span className="text-[8px] leading-[12px] text-[#35D478] bg-primary p-[2px] rounded-[20px]">
                    +25%
                  </span>
                </h4>
              </article>

              <div className="w-[1px] h-[54px] bg-border"></div>

              <article className="flex flex-col gap-2">
                <p className="text-sm text-white">Total Savings</p>
                <h4 className="w-full text-xl text-white font-bold flex items-center gap-1">
                  $90,510.20
                  <span className="text-[8px] leading-[12px] text-[#35D478] bg-primary p-[2px] rounded-[20px]">
                    +25%
                  </span>
                </h4>
              </article>
            </div>
          </div>

          <div className="flex flex-col gap-8 p-6 bg-white">
            <header className="flex items-center justify-between gap-3">
              <h4 className="font-medium">Budget Folders</h4>
              <AntdButton>View all</AntdButton>
            </header>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center justify-between gap-3 py-3 border-b border-border">
                <p>Personal Needs</p>
                <p>Mar. 2023</p>
              </li>
              <li className="flex items-center justify-between gap-3 py-3 border-b border-border">
                <p>Daily Needs</p>
                <p>May. 2023</p>
              </li>
              <li className="flex items-center justify-between gap-3 py-3 border-b border-border">
                <p>Daily Needs</p>
                <p>Jun. 2023</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8 p-6 bg-white">
            <header className="flex items-center justify-between gap-3">
              <h4 className="font-medium">Category History</h4>
              <AntdButton className="flex items-center gap-2">
                <span>Filter</span>
                <FilterIcon />
              </AntdButton>
            </header>

            <Table
              scroll={{ x: "max-content" }}
              columns={COLUMNS}
              dataSource={dataSource}
            />
          </div>
        </section>

        <aside className="max-w-[416px] flex flex-col gap-8">
          <div className="flex flex-col items-center gap-6 p-6 bg-white">
            <div className="flex flex-col items-center gap-3">
              <h4 className="font-medium">Expense Review</h4>
              <div className="max-w-[160px]">
                <Doughnut data={chartData} />
              </div>
              <ul className="w-full grid grid-cols-2 items-center gap-2">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#45EBA580]"></span>
                  <p>Housing</p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#2F80ED]"></span>
                  <p>Electricity</p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E2B93B]"></span>
                  <p>Shopping</p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#EB5757]"></span>
                  <p>Transportation</p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <article className="flex items-start gap-3">
                <p>Goal:</p>
                <p className="font-medium">
                  I want to improve on my savings and cut down on my expenses.
                </p>
              </article>
              <article className="flex items-start gap-3">
                <p>Goal:</p>
                <p className="font-medium">
                  You spent more than 15% of your budget for shopping in
                  October. You also spent 10% less on transportation.
                </p>
              </article>
            </div>
          </div>

          <div className="p-6 bg-white">
            <Table
              size="small"
              scroll={{ x: "max-content" }}
              className="max-w-[416px] shrink"
              columns={SUBS_COLUMNS}
              dataSource={subsDataSource}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

const COLUMNS = [
  {
    dataIndex: "category",
    title: "Category",
    render: (v: string) => (
      <span className="flex items-center gap-3">
        <SettingsIcon />
        {v}
      </span>
    ),
  },
  { dataIndex: "date", title: "Date" },
  { dataIndex: "description", title: "Description" },
  { dataIndex: "amount", title: "Amount" },
  { dataIndex: "trends", title: "Trends" },
];

const SUBS_COLUMNS = [
  { dataIndex: "subscription", title: "Subscription" },
  { dataIndex: "date", title: "Date" },
  { dataIndex: "type", title: "Type" },
  { dataIndex: "amount", title: "Amount" },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
