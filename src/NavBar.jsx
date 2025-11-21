import { Link } from "react-router";
import "./App.css";

const NavBar = ({ user, setUser }) => {
  const logout = () => {
    window.localStorage.removeItem("token");
    setUser({});
  };
  return (
    <nav>
      <img src="public\books.png"></img>
      <Link to="/">Book Buddy</Link>
      <Link to="allBooks">Books</Link>
      {user.id ? (
        <span>
          <Link>Account</Link>
          <Link onClick={logout} to="/">
            Logout
          </Link>
        </span>
      ) : (
        <span>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </span>
      )}
    </nav>
  );
};

export default NavBar;
