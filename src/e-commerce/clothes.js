import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/header/navbar'
  import 'react-toastify/dist/ReactToastify.css';
  import FillButton from '../components/buttons/fillButton'
  import CartItems from '../components/cartitems/cartItem'
toast.configure()
function Clothes() {
  const [clothes, setfClothes] = useState([]);
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
              <div  key={item.id}>
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
export default Clothes;
