import { Link } from "react-router";

const Account = ({ user, reservations = [], removeReservation }) => {
  return (
    <div className="reservationsContainer">
      <h2>{user.firstname}, is currently logged in</h2>
      <p>Your email on file with us is {user.email}</p>

      <h2>Your reservations</h2>

      {reservations.length > 0 ? (
        <div>
          {reservations.map((res) => (
            <div className="book" key={res.id}>
              <Link to={`/allBooks/${res.bookid}`}>
                <h4>{res.title}</h4>
              </Link>

              <p>{res.author}</p>
              <button onClick={() => removeReservation(res.id)}>
                Return book
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>You have not reserved any books yet. Please browse our catalog.</p>
      )}
    </div>
  );
};

export default Account;
