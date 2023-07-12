import React, { useState, useEffect } from "react";
import "../e-commerce/index.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const intialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = () => {
    console.log(formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "Cannot be blank";
    }
    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
  };

  function onclickHandle(e) {
    e.preventDefault();
    setFormErrors(validate(formValues));
    let item = {
      username: formValues.username,
      password: formValues.password,
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
        console.log("fhhh", response.id);
        if (response.id) {
          localStorage.setItem("username", JSON.stringify(item));

          alert("Login successful");
          navigate("/smartphones");
        } else {
          setLoginError(true);
        }
      })

      .catch((error) => {
        console.log("error", error);
        setLoginError(true);
      });
  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={() => onclickHandle()}>
        <div className="maindiv">
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            value={formValues.username}
            onChange={handleChange}
            className={formErrors.username && "input-error"}
          />
          {formErrors.username && (
            <span className="error">{formErrors.username}</span>
          )}

          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            className={formErrors.password && "input-error"}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
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
