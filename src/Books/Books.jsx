import "./books.css";
import { Link } from "react-router";

const Books = ({ books, reserveBook }) => {
  return (
    <div className="booksContainer">
      <h1>Catalog</h1>
      {books.map((book) => {
        return (
          <div className="book" key={book.id}>
            <img src={book.coverimage} />
            <Link to={`/allBooks/${book.id}`}>
              <h3>{book.title}</h3>
            </Link>
            <p>{book.author}</p>
            <p>{book.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
