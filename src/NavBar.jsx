import { Link } from "react-router";
import "./App.css";

const NavBar = ({ user }) => {
  return (
    <nav>
      <img src="public\books.png"></img>
      <Link to="/">Book Buddy</Link>
      <Link to="allBooks">Books</Link>
      {user.id ? (
        <span>
          <Link>Account</Link>
          <Link>Logout</Link>
        </span>
      ) : (
        <span>
          <Link to="/login">Login</Link>
          <Link>Register</Link>
        </span>
      )}
    </nav>
  );
};

export default NavBar;
