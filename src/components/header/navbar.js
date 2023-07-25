import { Link} from "react-router-dom";
import '../header/navbar.css'
function Navbar({children}) {
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
        <br />
        <br />
        <br />
      </div>
      {children}
    </>
  );
}
export default Navbar;
