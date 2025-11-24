import axios from "axios";
import { useNavigate } from "react-router";

const Login = ({ authenticate }) => {
  const navigate = useNavigate();
  const login = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    const user = {
      email,
      password,
    };
    try {
      const { data } = await axios.post(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",
        user
      );
      window.localStorage.setItem("token", data.token);
      authenticate();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Log in to your account</h1>
      <form id="loginForm" action={login}>
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
        <button type="submit" className="loginButton">
          Login
        </button>
        <p>Need an account? Register here.</p>
      </form>
    </div>
  );
};

export default Login;
