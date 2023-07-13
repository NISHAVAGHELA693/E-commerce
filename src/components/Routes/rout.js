import Login from "../../e-commerce/login";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Smartphones from "../../e-commerce/smartphones";
import Others from "../../e-commerce/others";
import Clothes from "../../e-commerce/clothes";
import Groceries from "../../e-commerce/furniture";
import Furniture from "../../e-commerce/groceries";
import AddCart from "../../e-commerce/addcart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Redirect } from "react";
import { Navigate, Outlet } from 'react-router-dom';
toast.configure();
function PrivateRoute(props) {
    const username = JSON.parse(localStorage.getItem("username"));
    return username ? <Outlet /> : <Navigate to="/" />;
}
function RoutesComponent() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path='/' element={<PrivateRoute/>}>
          <Route path="/smartphones" element={<Smartphones />}/>
          <Route path="/clothes" element={<Clothes />} />
            <Route path="/groceries" element={<Groceries />} />
            <Route path="/others" element={<Others />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/addcart" element={<AddCart />} />
            <Route path="/" element/>
          </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default RoutesComponent;
