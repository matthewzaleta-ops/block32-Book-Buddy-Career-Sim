import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const register = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const firstname = formData.get("firstname");
    const user = {
      email,
      password,
      firstName,
    };
    try {
      const { data } = await axios.post(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",
        user
      );
      alert("Thanks for registering!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Register for an account</h2>
      <form id="loginForm" action={register}>
        <label>
          First Name
          <br />
          <input type="text" name="firstname" />
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
