const Register = () => {
  return (
    <div>
      <h2>Register for an account</h2>
      <form id="loginForm">
        <label>
          First Name
          <br />
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name
          <br />
          <input type="text" name="lastName" />
        </label>
        <label>
          Email
          <br />
          <input type="text" name="email" />
        </label>
        <label>
          Password
          <br />
          <input type="password" name="password" />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Register;
