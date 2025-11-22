const Account = ({ user }) => {
  return (
    <div>
      <h2>{user.firstname}, is currently logged in</h2>
      <p>Your email on file with us is {user.email}</p>
      <h2>Your reservations</h2>
      <p>You have not reserved any books yet. Please browse our catalog.</p>
    </div>
  );
};

export default Account;
