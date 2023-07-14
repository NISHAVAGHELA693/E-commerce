import React, { useState, useEffect } from "react";
import "../e-commerce/index.css";
import { useNavigate } from "react-router-dom";
import InputField from "../components/inputField";
import FillButton from "../components/buttons/fillButton";
import stringConst from "../common/constant/index";
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
    console.log("bnnbmnhn", values);
    console.log("rtyht");
    let errors = {};
    if (!values.username) {
      console.log("rtyhtfhgjkkjkil");
      errors.username = "Cannot be blank";
    } else if (!values.password) {
      errors.password = "Cannot be blank";
      console.log("nishaaaaaa");
    } else if (values.password.length < 4) {
      console.log("rtyhtniashaa");
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
  };

  function onclickHandle(e) {
    e.preventDefault();
    console.log(".....", validate(formValues));
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
