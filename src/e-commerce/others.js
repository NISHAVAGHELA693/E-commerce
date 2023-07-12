import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Others(){
    const [others, setOthers] = useState([]);
  const fetchUserData = () => {
    fetch("https://dummyjson.com/products/category/categories")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setOthers(data.products);
        console.log(data.products);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
    return(
        <div>
            <div className="navlink">
        <Link className="products" to="/smartphones">
          smartphons
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
      <h2>All products</h2>
      <div>
        {others.length > 0 && (
          <div>
            {others.map((item) => (
              <div key={item.id}>
                {item.title},{item.price},{item.discription},{item.images}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
    export default Others;