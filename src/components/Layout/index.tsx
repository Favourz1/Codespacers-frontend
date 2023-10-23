import classes from "./styles.module.scss";
import Button from "@/components/Button";
import MenuButton from "@/components/MenuButton";
import { Outlet, useLocation } from "react-router-dom";
import { MenuItem } from "@/lib/types";
import SearchIcon from "@/assets/icons/search-icon.svg";
import NotificationIcon from "@/assets/icons/notification-icon.svg";
import HelpIcon from "@/assets/icons/help-icon.svg";
import DashboardIcon from "@/assets/icons/dashboard-icon.svg";
import BudgetIcon from "@/assets/icons/budget-icon.svg";
import SubscriptionsIcon from "@/assets/icons/subscriptions-icon.svg";
import ExpenseRecordsIcon from "@/assets/icons/expense-records-icon.svg";
import TrackExpenditureIcon from "@/assets/icons/track-expenditures-icon.svg";
import { ROUTE_KEYS } from "@/lib/constants";

export default function Layout() {
  const { pathname } = useLocation();

  console.log("pathname is", pathname);

  const handleSearch: React.FormEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.wrapper}>
      <aside className={classes.aside}>
        <figure>
          <h1>Budgetify</h1>
        </figure>

        <nav className={classes.menu_items}>
          {MENU_ITEMS.map((item) => (
            <MenuButton
              key={item.path}
              href={item.path}
              label={item.label}
              icon={item.icon}
              active={pathname.includes(item.path)}
            />
          ))}
        </nav>
      </aside>

      <main className={classes.header_main}>
        <header className={classes.header}>
          <form onSubmit={handleSearch} className={classes.search_form}>
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </form>

          <div className={classes.actions}>
            <Button icon={<NotificationIcon />} />
            <Button icon={<HelpIcon />} />
          </div>
        </header>
        <section className={classes.main}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}

const MENU_ITEMS: MenuItem[] = [
  { path: ROUTE_KEYS.DASHBOARD, label: "Dashboard", icon: <DashboardIcon /> },
  { path: ROUTE_KEYS.BUDGET, label: "Budget", icon: <BudgetIcon /> },
  {
    path: ROUTE_KEYS.SUBSCRIPTIONS,
    label: "Subscriptions",
    icon: <SubscriptionsIcon />,
  },
  {
    path: ROUTE_KEYS.EXPENSE_RECORDS,
    label: "Expense Records",
    icon: <ExpenseRecordsIcon />,
  },
  {
    path: ROUTE_KEYS.TRACK_EXPENDITURE,
    label: "Track Expenditure",
    icon: <TrackExpenditureIcon />,
  },
];
