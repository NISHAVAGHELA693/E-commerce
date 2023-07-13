import { Link, NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FillButton from "../buttons/fillButton";
function Navbar({ children, username }) {
  const nav = useNavigate();
  const Logout = () => {
    
    const username = JSON.parse(localStorage.getItem("username"));
    localStorage.removeItem("username");
    nav("/")

  }; 
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
        </Link><br/><br/><br/>
        <FillButton
          type='submit'
          name="LogOut"
          customStyle ='logout'
          handleClick={Logout}/>
        <h5>
          Welcome {username.username}
        </h5>
        
      </div>
      {children}
    </>
  );
}
export default Navbar;
