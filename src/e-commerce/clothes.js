import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './navbar'
  import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function Clothes() {
  const [clothes, setfClothes] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const username = JSON.parse(localStorage.getItem("username"));
  const fetchUserData = () => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setfClothes(data.products);
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
        {clothes.length > 0 && (
          <div className="nav-maindiv">
            {clothes.map((item) => (
              <div className="marginView" key={item.id}>
                <p className="title">{item.title}</p>
                <img src={item.thumbnail}></img>
                <h5>price : ₹{item.price}</h5>
                <p>DiscountPercentage : {item.discountPercentage}%</p>
                {selectedItem === item.id ? (
                  <p>{item.description}</p>
                ) : (
                  <p>Description : {item.description.substring(0, 35)}...</p>
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
export default Clothes;
