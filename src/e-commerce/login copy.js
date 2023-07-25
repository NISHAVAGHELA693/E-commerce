import React, { useState } from "react";
import "../e-commerce/index.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const [userName, setUsername] = useState(null);
  const [password, setpassword] = useState(null);

  
  function onclickHandle(e) {
    e.preventDefault();

    let item = {
      username: userName,
      password: password,
    };
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.id) {
          localStorage.setItem("username", JSON.stringify(item));

          alert("Login successful");
          navigate("/smartphones");
        } else {
          alert("Login failed");
          setLoginError(true);
        }
      })

      .catch((error) => {
        console.log("error", error);
        setLoginError(true);
      });
  }
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div className="maindiv">
          <label>Username</label>
          <br />
          <input
            type="text"
            className="login-inputs"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            type="text"
            className="login-inputs"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <br />

          <button
            type="submit"
            className="login-btn"
            onClick={(event) => onclickHandle(event)}
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
