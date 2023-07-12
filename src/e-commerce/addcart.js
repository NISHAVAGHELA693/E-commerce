import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function AddCart() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    let totalPrice = 0;
    let totalDiscount = 0;
    cartItems?.forEach((item) => {
      totalPrice += item?.price;
      totalDiscount += (item?.price * item?.discountPercentage) / 100;
    });
    setTotalPrice(totalPrice);
    setTotalDiscount(totalDiscount);
  }, [cartItems]);

  const removeOnClick = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item?.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  const addOnClick = (itemId) => {
    const updatedCartItems = cartItems?.map((cartItem) => {
      if (cartItem?.id === itemId) {
        console.log( 'quantity', cartItem?.quantity + 1);
        console.log('cartItem',cartItem)
        return { ...cartItem, quantity: cartItem?.quantity + 1};
      }
      return cartItem;
    });
    console.log('hello',updatedCartItems);
    setCartItems(updatedCartItems);
    console.log('hello',updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  function proceed() {
    localStorage.removeItem("cartItems");
    setCartItems(null);
  }
  return (
    <div>
      <div className="navlink">
        <Link className="products" to="/smartphones">
          smartphones
        </Link>
        <Link className="products" to="/clothes">
          clothes
        </Link>

        <Link className="products" to="/groceries">
          groceries
        </Link>
        <Link className="products" to="/furniture">
          furnitures
        </Link>
        <Link className="products" to="/others">
          allproducts
        </Link>
        <Link className="products" to="/addcart">
          addcart
        </Link>
      </div>
      {cartItems?.length >= 0 ? (
        <div>
          <h5>Your WishList !!</h5>
          <p>Total Price: ₹{totalPrice}</p>
          <p>Total Discount: {totalDiscount}</p>
          <button onClick={() => proceed()} type="submit">
            buy now
          </button>
        </div>
      ) : (
        <p>No data found!!</p>
      )}

      <div className="nav-maindiv">
        {cartItems?.map((value) => {
          return (
            <div className="marginView" key={value?.id}>
              <p className="title">{value?.title}</p>
              <img src={value?.thumbnail}></img>
              <h5>price : ₹{value?.price}</h5>
              <p>DiscountPercentage : {value?.discountPercentage}%</p>
              {selectedItem === value?.id ? (
                <p>{value?.description}</p>
              ) : (
                <p>Description : {value?.description.substring(0, 40)}...</p>
              )}
              <button
                className="add-btn"
                type="submit"
                onClick={() => removeOnClick(value.id)}
              >
                -
              </button>
              <button
                className="add-btn"
                type="submit"
                onClick={() => addOnClick(value.id)}
              >
                +{value?.quantity}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AddCart;
