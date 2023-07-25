import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/header/navbar";
import "react-toastify/dist/ReactToastify.css";
import FillButton from "../components/buttons/fillButton";
import CartItems from "../components/cartitems/cartItem";
toast.configure();
function Clothes() {
  const nav = useNavigate();
  const Logout = (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("Are you sure you want to log out ? ");
    if (confirmLogout) {
      localStorage.removeItem("username");
      nav("/");
    }
  };
  const [clothes, setfClothes] = useState([]);
  const fetchUserData = () => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setfClothes(data.products);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
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
        {clothes.length > 0 && (
          <div className="nav-maindiv">
            {clothes.map((item) => (
              <div key={item.id}>
                <CartItems
                  title={item.title}
                  thumbnail={item.thumbnail}
                  price={item.price}
                  DiscountPercentage={item.discountPercentage}
                  Description={item.description}
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
export default Clothes;
