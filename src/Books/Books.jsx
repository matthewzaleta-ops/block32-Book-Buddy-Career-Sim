import "./books.css";
import { Link } from "react-router";

const Books = ({ books, reserveBook }) => {
  return (
    <div>
      <h1 className="catalog">Catalog</h1>
      <div className="booksContainer">
        {books.map((book) => {
          return (
            <div className="book" key={book.id}>
              <img src={book.coverimage} />
              <div>
                <Link to={`/allBooks/${book.id}`}>
                  <h4 className="bookTitle">{book.title}</h4>
                </Link>
                <p>{book.author}</p>
                <p>{book.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
