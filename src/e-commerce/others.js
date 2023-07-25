import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FillButton from "../components/buttons/fillButton";
import Navbar from "../components/header/navbar";
function Others() {
  const nav = useNavigate();
  const Logout = (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("Are you sure you want to log out ? ");
    if (confirmLogout) {
      localStorage.removeItem("username");
      nav("/");
    }
  };
  const [others, setOthers] = useState([]);
  const fetchUserData = () => {
    fetch("https://dummyjson.com/products/category/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOthers(data.products);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <Navbar>
      <div>
        <FillButton
          type="submit"
          name="LogOut"
          customStyle="logout"
          handleClick={(event) => Logout(event)}
        />
        <h2>All products</h2>
        <div>
          {others.length > 0 && (
            <div>
              {others.map((item) => (
                <div key={item.id}>
                  {item.title},{item.price},{item.discription},{item.images}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Navbar>
  );
}
export default Others;
