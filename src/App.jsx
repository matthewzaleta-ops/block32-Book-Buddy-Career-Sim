import Books from "./Books/Books";
import "./App.css";
import SingleBook from "./Books/SingleBook";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";
import Layout from "./Layout";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Account from "./Auth/Account";

function App() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});

  const authenticate = async () => {
    try {
      const token = window.localStorage.getItem("token");

      const { data } = await axios.get(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      authenticate();
    }
  }, [user.id]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      const { data } = await axios.get(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
      );

      setBooks(data);
    };
    fetchAllBooks();
  }, []);

  return (
    <div>
      {user.id ? <h3>Welcome Back, {user.firstname}!</h3> : null}
      <Routes>
        <Route element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<Books books={books} />} />
          <Route path="/allBooks" element={<Books books={books} />} />
          <Route path="/allBooks/:id" element={<SingleBook books={books} />} />
          <Route
            path="/login"
            element={<Login authenticate={authenticate} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/Account" element={<Account user={user} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/*
    <div>
      <h1>
        <img id="logo-image" src="books.png" />
        Library App
      </h1>

      <p>
        Complete the React components needed to allow users to browse a library
        catalog, check out books, review their account, and return books that
        they've finished reading.
      </p>
      <p>
        You may need to use some state in this top-level component in other
        components that need to know if a user has logged in or not.
      </p>
      <p>
        Don't forget to set up React Router to navigate between the different
        views of your single page application!
      </p>
    </div>
    */
