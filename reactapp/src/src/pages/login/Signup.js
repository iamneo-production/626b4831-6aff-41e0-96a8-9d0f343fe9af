import React, { useState } from "react";
import basestyle from "../Base.module.css";
import registerstyle from "./Register.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isStrongPassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: username,
      email: email,
      password: password,
    };

    if (email.trim() === "" || password.trim() === "" || username.trim() === "") {
      setError("Please fill in all the fields.");
    } else if (!isStrongPassword(password)) {
      setError("Please enter a strong password combination.");
    } else {
      setError("");
      axios
        .post("http://localhost:8080/post", data)
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          console.error("Signup failed!", error);
          setError("An error occurred. Please try again later.");
        });
    }
  };

  return (
    <>
      <div className={`${registerstyle.register} custom-signup`}>
        <form onSubmit={handleSubmit}>
          
          <h1>Sign up</h1>
          <label id="lab">Name</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <br/><br/>
          <p className={basestyle.error}></p>
          <label id="lab">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            required
          />
          <br/>
          <br/>
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
          <p className={basestyle.error}></p>
          {error && <p className="error">{error}</p>}
          <button className={basestyle.button_common} type="submit">
            Register
          </button>
        </form>
        <NavLink to="/login">Already registered? Login</NavLink>
      </div>
    </>
  );
};

export default Signup;