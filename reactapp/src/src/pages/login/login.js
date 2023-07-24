import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({ setUserState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get");
      setDetails(response.data);
      console.log(response);
    } catch (error) {
      console.log("error fetching data");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.some((user) => user.email === email && user.password === password)) {
      navigate("/");
    } else {
      setError("User not found");
    }
  };

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className={`${loginstyle.login} ${showAnimation ? "show" : ""} custom-login`}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label id="lab">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
         <br/><br/>
        <p className={basestyle.error}></p>
        <label id="lab">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <p className={basestyle.error}>{error}</p>
        <button className={basestyle.button_common} type="submit">
          Login
        </button>
      </form>
      <NavLink to="/signup">Create an account</NavLink>
    </div>
  );
};

export default Login;