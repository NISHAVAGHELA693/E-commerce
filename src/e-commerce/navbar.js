
import { Link, NavLink } from "react-router-dom";
function Navbar({ children,username }) {
  return (
  <>
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
      <h5>
        <img
          src="https://cdn.vectorstock.com/i/1000x1000/45/75/family-shopping-and-gift-box-in-shopping-cart-vector-8314575.webp"
          alt="new"
          className="userImg"
        /><br/>
        Welcome {username.username}
      </h5>
    </div>
    {children}
  </>
  );
}
export default Navbar;
