import { useParams, Link } from "react-router";

const SingleBook = ({ books, reserveBook, reservations }) => {
  const { id } = useParams();

  const singleBook = books.find((book) => {
    return book.id === id * 1;
  });

  if (!singleBook) {
    return <div>Loading...</div>;
  }

  const alreadyReserved = reservations.some((r) => r.bookid === singleBook.id);

  return (
    <div className="singleBook">
      <img src={singleBook.coverimage} />
      <h2>{singleBook.title}</h2>
      <p>{singleBook.author}</p>
      <p>{singleBook.description}</p>
      <button
        disabled={alreadyReserved}
        onClick={() => {
          reserveBook(singleBook.id);
        }}
      >
        {alreadyReserved ? "Book already reserved" : "Reserve Book"}
      </button>
      <div>
        <Link to="/allBooks">Back to Catalog</Link>
      </div>
    </div>
  );
};

export default SingleBook;
