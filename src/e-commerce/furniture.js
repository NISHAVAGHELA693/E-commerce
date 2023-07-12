import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar";

toast.configure();
function Furniture() {
  const username = JSON.parse(localStorage.getItem("username"));
  const [furniture, setfFurniture] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const fetchUserData = () => {
    fetch("https://dummyjson.com/products/category/furniture")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setfFurniture(data.products);
        console.log(data.products);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const addToCart = (item) => {
    toast("Item added to cart!");
    const existingItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log("fgfhfghj", existingItems);
    if (Array.isArray(existingItems)) {
      existingItems.push(item);

      localStorage.setItem("cartItems", JSON.stringify(existingItems));
    } else {
      let cartItems = [];
      cartItems.push(item);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log("fghjyku", JSON.stringify(cartItems));
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <Navbar username={username}>
      <div>
        {furniture.length > 0 && (
          <div className="nav-maindiv">
            {furniture.map((item) => (
              <div className="marginView" key={item.id}>
                <p className="title">{item.title}</p>
                <img src={item.thumbnail}></img>
                <h5>price : ₹{item.price}</h5>
                <p>DiscountPercentage : {item.discountPercentage}%</p>
                {selectedItem === item.id ? (
                  <p>{item.description}</p>
                ) : (
                  <p>Description : {item.description.substring(0, 40)}...</p>
                )}
                <button
                  className="add-btn-cart"
                  type="submit"
                  onClick={() => addToCart(item)}
                >
                  add cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Navbar>
  );
}
export default Furniture;
