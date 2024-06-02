import styles from "./Home.module.css";
import NavBar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Outlet />
    </div>
  );
}
