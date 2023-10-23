import Button from "@/components/Button";
import classes from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import SearchIcon from "@/assets/icons/search-icon.svg";
import NotificationIcon from "@/assets/icons/notification-icon.svg";
import HelpIcon from "@/assets/icons/help-icon.svg";

export default function Layout() {
  const handleSearch: React.FormEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.wrapper}>
      <aside className={classes.aside}>
        <figure>
          <h1>Budgetify</h1>
        </figure>
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
