import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "../components/AppNav";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright
          {new Date().getFullYear()} By WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
