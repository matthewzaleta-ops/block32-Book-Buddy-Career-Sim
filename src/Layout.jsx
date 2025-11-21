import { Outlet } from "react-router";
import NavBar from "./NavBar";
import "./App.css";

const Layout = ({ user, setUser }) => {
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
