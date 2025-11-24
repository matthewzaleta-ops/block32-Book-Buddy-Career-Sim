import { useParams, Link } from "react-router";

const SingleBook = ({ books, reserveBook }) => {
  const { id } = useParams();

  const singleBook = books.find((book) => {
    return book.id === id * 1;
  });

  if (!singleBook) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singleBook">
      <img src={singleBook.coverimage} />
      <h2>{singleBook.title}</h2>
      <p>{singleBook.author}</p>
      <p>{singleBook.description}</p>
      <button
        onClick={() => {
          reserveBook(singleBook.id);
        }}
      >
        Reserve this book
      </button>
      <div>
        <Link to="/allBooks">Back to Catalog</Link>
      </div>
    </div>
  );
};

export default SingleBook;
