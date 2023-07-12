import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar";
import CartItems from '../components/cartitems/cartItem'
import FillButton from '../components/buttons/fillButton'
toast.configure();
function Groceries() {
  const username = JSON.parse(localStorage.getItem("username"));
  const [groceries, setGroceries] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = () => {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setGroceries(data.products);
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

  return (
    <Navbar username={username}>
      <div>
        {groceries.length > 0 && (
          <div className="nav-maindiv">
            {groceries.map((item) => (
              <div className="marginView" key={item.id}>
                <CartItems 
                title={item.title}
                thumbnail={item.thumbnail}
                price={item.price}
                DiscountPercentage={item.discountPercentage}
                Description={item.description}
                />
                 <FillButton
          type='submit'
          handleClick={()=>addToCart(item)}
          name="Add To Cart"
          customStyle ='add-cart-btn'/>
              </div>
            ))}
          </div>
        )}
      </div>
    </Navbar>
  );
}
export default Groceries;
