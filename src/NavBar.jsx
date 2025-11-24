import { Link } from "react-router";
import "./App.css";

const NavBar = ({ user, setUser }) => {
  const logout = () => {
    window.localStorage.removeItem("token");
    setUser({});
  };
  return (
    <nav className="navContainer">
      <img src="public\books.png"></img>
      <Link to="/" className="bookBuddy">
        Book Buddy
      </Link>
      <Link to="allBooks">Books</Link>
      {user.id ? (
        <span className="span">
          <Link to="/Account">Account</Link>
          <Link onClick={logout} to="/">
            Logout
          </Link>
        </span>
      ) : (
        <span className="span">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </span>
      )}
    </nav>
  );
};

export default NavBar;
