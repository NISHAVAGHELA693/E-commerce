import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "../components/cartitems/cartItem";
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
      const itemPrice = item?.price * item?.quantity;
      totalPrice += itemPrice;
      totalDiscount += (itemPrice * item?.discountPercentage) / 100;
    });
    setTotalPrice(totalPrice);
    setTotalDiscount(totalDiscount);
  }, [cartItems]);

  const removeOne = (itemId) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        const updatedQuantity = cartItem.quantity - 1;
        if (updatedQuantity <= 0) {
          return null;
        } else {
          return { ...cartItem, quantity: updatedQuantity };
        }
      }
      return cartItem;
    });
    const filteredCartItems = updatedCartItems.filter((item) => item !== null);
    setCartItems(filteredCartItems);
    localStorage.setItem("cartItems", JSON.stringify(filteredCartItems));
  };
  const addOnClick = (itemId) => {
    const updatedCartItems = cartItems?.map((cartItem) => {
      if (cartItem?.id === itemId) {
        return { ...cartItem, quantity: cartItem?.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
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
            <div>
            <CartItems
                  title={value.title}
                  thumbnail={value.thumbnail}
                  price={value.price}
                  DiscountPercentage={value.discountPercentage}
                  Description={value.description}
                />
              <button
                className="add-btn"
                type="submit"
                onClick={() => removeOne(value?.id)}
              >
                -
              </button>
              <button
                className="add-btn"
                type="submit"
                onClick={() => addOnClick(value?.id)}
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
