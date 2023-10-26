import classes from "./styles.module.scss";
import Button from "@/components/Button";
import MenuButton from "@/components/MenuButton";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MenuItem } from "@/lib/types";
import SearchIcon from "@/assets/icons/search-icon.svg";
import NotificationIcon from "@/assets/icons/notification-icon.svg";
import HelpIcon from "@/assets/icons/help-icon.svg";
import DashboardIcon from "@/assets/icons/dashboard-icon.svg";
import DashboardActiveIcon from "@/assets/icons/dashboard-active-icon.svg";
import BudgetIcon from "@/assets/icons/budget-icon.svg";
import BudgetActiveIcon from "@/assets/icons/budget-active-icon.svg";
import SubscriptionsIcon from "@/assets/icons/subscriptions-icon.svg";
import SubscriptionsActiveIcon from "@/assets/icons/subscriptions-active-icon.svg";
import ExpenseRecordsIcon from "@/assets/icons/expense-records-icon.svg";
import ExpenseRecordsActiveIcon from "@/assets/icons/expense-records-active-icon.svg";
import TrackExpenditureIcon from "@/assets/icons/track-expenditures-icon.svg";
import TrackExpenditureActiveIcon from "@/assets/icons/track-expenditures-active-icon.svg";
import { ROUTE_KEYS } from "@/lib/constants";
import BudgetifyBlueLogo from "@/assets/icons/budgetify-logo-blue.svg";

export default function Layout() {
  const { pathname } = useLocation();

  const handleSearch: React.FormEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.wrapper}>
      <aside className={classes.aside}>
        <figure>
          <Link to="/">
            <BudgetifyBlueLogo />
          </Link>
        </figure>

        <nav className={classes.menu_items}>
          {MENU_ITEMS.map((item) => (
            <MenuButton
              key={item.path}
              href={item.path}
              label={item.label}
              icon={pathname.includes(item.path) ? item.activeIcon : item.icon}
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
  {
    path: ROUTE_KEYS.DASHBOARD,
    label: "Dashboard",
    icon: <DashboardIcon />,
    activeIcon: <DashboardActiveIcon />,
  },
  {
    path: ROUTE_KEYS.BUDGET,
    label: "Budget",
    icon: <BudgetIcon />,
    activeIcon: <BudgetActiveIcon />,
  },
  {
    path: ROUTE_KEYS.SUBSCRIPTIONS,
    label: "Subscriptions",
    icon: <SubscriptionsIcon />,
    activeIcon: <SubscriptionsActiveIcon />,
  },
  {
    path: ROUTE_KEYS.EXPENSE_RECORDS,
    label: "Expense Records",
    icon: <ExpenseRecordsIcon />,
    activeIcon: <ExpenseRecordsActiveIcon />,
  },
  {
    path: ROUTE_KEYS.TRACK_EXPENDITURE,
    label: "Track Expenditure",
    icon: <TrackExpenditureIcon />,
    activeIcon: <TrackExpenditureActiveIcon />,
  },
];
