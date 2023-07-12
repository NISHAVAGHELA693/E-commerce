import { BrowserRouter, Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../e-commerce/index.css";
const Home = () => {
  const username = localStorage.getItem("username");
  return (
    <div>
      <div className="navlink">
        <Link className="smartphones" to="/smartphones">
          smartphons
        </Link>

        <Link className="clothes" to="/clothes">
          clothes
        </Link>

        <Link className="groceries" to="/groceries">
          groceries
        </Link>
        <Link className="furniture" to="/furniture">
          furnitures
        </Link>
        <Link className="others" to="/allproducts">
          others
        </Link>
      </div>
      <h3>WellCome {username}!</h3>

      <div class="centered">
        
      </div>
    </div>
  );
};
export default Home;
