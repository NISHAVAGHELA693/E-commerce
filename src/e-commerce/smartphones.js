import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/header/navbar";
import FillButton from "../components/buttons/fillButton";
import CartItems from "../components/cartitems/cartItem";
import "../components/cartitems/style.css";
toast.configure();
function Smartphones() {
  const nav = useNavigate();
  const Logout = (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("Are you sure you want to log out ? ");
    if (confirmLogout) {
      localStorage.removeItem("username");
      nav("/");
    }
  };
  const username = JSON.parse(localStorage.getItem("username"));
  const [electricItem, setelectricItem] = useState([]);
  const fetchUserData = () => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setelectricItem(data.products);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  const addToCart = (item) => {
    toast("Item added to cart!");
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = existingItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      existingItems[existingItemIndex].quantity += 1;
    } else {
      item.quantity = 1;
      existingItems.push(item);
    }
    localStorage.setItem("cartItems", JSON.stringify(existingItems));
  };
  return (
    <Navbar username={username}>
      <div>
        <FillButton
          type="submit"
          name="LogOut"
          customStyle="logout"
          handleClick={(event) => Logout(event)}
        />
        {electricItem.length > 0 && (
          <div className="nav-maindiv">
            {electricItem.map((item) => (
              <div key={item.id}>
                <CartItems
                  title={item.title}
                  thumbnail={item.thumbnail}
                  price={item.price}
                  DiscountPercentage={item.discountPercentage}
                  Description={item.description}
                  customStyle="cart-style"
                />
                <FillButton
                  type="submit"
                  handleClick={() => addToCart(item)}
                  name="Add To Cart"
                  customStyle="add-cart-btn"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Navbar>
  );
}
export default Smartphones;
