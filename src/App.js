import logo from "./logo.svg";
// import './App.css';
// import Signup from './e-commerce/signup';
import Login from "./e-commerce/login";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Smartphones from "./e-commerce/smartphones";
import Others from "./e-commerce/others";
import Clothes from "./e-commerce/clothes";
import Groceries from "./e-commerce/groceries";
import Furniture from "./e-commerce/furniture";
import AddCart from './e-commerce/addcart';
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/others" element={<Others />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/addcart" element={<AddCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
