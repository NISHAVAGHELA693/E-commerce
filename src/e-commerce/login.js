import React, { useState, useEffect } from "react";
import "../e-commerce/index.css";
import { useNavigate } from "react-router-dom";
import InputField from "../components/inputField";
import FillButton from "../components/buttons/fillButton";
import stringConst from "../common/constant/index";
import {toast } from "react-toastify";
toast.configure();
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
    } else if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    else if (!values.username){
      errors.login = "user not found";
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
        if (response.id) {
          localStorage.setItem("username", JSON.stringify(item));
          alert("Login successful");
          navigate("/smartphones", { replace: true })
        } else {
          setLoginError(true);
          toast("user not found")
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
        <div>
          <InputField
            type={"text"}
            name={"username"}
            id={"username"}
            value={formValues.username}
            handleChange={handleChange}
            headeing={"username"}
            formErrors={formErrors}
          />
            {formErrors.username&&<p className="error">{formErrors.username}</p>}

          <br />
          <br />

          <InputField
            type="password"
            name={"password"}
            id={"password"}
            value={formValues.password}
            handleChange={handleChange}
            headeing={"pasword"}
            formErrors={formErrors}
          />
           {formErrors.password&&<p className="error">{formErrors.password}</p>}
     
       
          <br />
          <br />
          <FillButton
            type="submit"
            handleClick={(event) => onclickHandle(event)}
            name={stringConst.login}
          />
        </div>
      </form>
    </div>
  );
};
export default Login;
