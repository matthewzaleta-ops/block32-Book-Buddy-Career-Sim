import { Outlet } from "react-router";
import NavBar from "./NavBar";
import "./App.css";

const Layout = ({ user }) => {
  return (
    <div>
      <NavBar user={user} />
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
