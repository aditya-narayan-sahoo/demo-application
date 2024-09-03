import MainNavigation from "./MainNavigation";
import "./layout.css";
import { Outlet } from "react-router-dom";
const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className="main">{props.children}</main>
    </div>
  );
};

export default Layout;
