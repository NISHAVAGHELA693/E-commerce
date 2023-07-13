const CartItems = (props) => {
  const {
    price,
    title,
    thumbnail,
    DiscountPercentage,
    Description,
    customStyle,
  } = props;
  return (
    <div className="nav-maindiv">
      <div className={customStyle ? customStyle : "cart-data-style"}>
        <p>{title}</p>
        <img src={thumbnail}></img>
        <h5>price : ₹{price}</h5>
        <p>DiscountPercentage : {DiscountPercentage}%</p>
        <p>{Description.substring(0, 40)}...</p>
      </div>
    </div>
  );
};
export default CartItems;
