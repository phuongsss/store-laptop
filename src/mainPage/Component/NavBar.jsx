import { NavLink, Navigate, useNavigate } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";

import "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changebrand } from "../Redux/Slice";
import { useState } from "react";

function NavBar() {
  const [core, setCore] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((name) => name.statemain.name);
  
  function HandleSearch(e) {
    e.preventDefault();
    dispatch(changebrand(core));
    navigate("/product");
  }

  return (
    <div className="bg-yellow-300 p-5">
      <div className="flex items-center justify-between">
        <ul className="flex gap-5">
          <li>
            <NavLink
              className="flex gap-3 items-center text-xl font-bold text-stone-700"
              to="/"
            >
              <IoHome />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className="flex gap-3 items-center text-xl font-bold text-stone-700"
              to="/product"
            >
              <FaProductHunt />
              Product
            </NavLink>
          </li>

          <li>
            <NavLink
              className="flex gap-3 items-center text-xl font-bold text-stone-700"
              to="/cart"
            >
              <FaShoppingCart />
              Cart
            </NavLink>
          </li>
        </ul>
        <form onSubmit={HandleSearch}>
          <input
            value={core}
            onChange={(e) => setCore(e.target.value)}
            type="text"
            className="rounded-full p-2 w-28 focus:w-80 transition-all duration-500 outline-offset-2 outline-white"
            placeholder="Enter 1 Brand"
          />
        </form>

        <h1 className="font-bold text-lg">
          {" "}
          {name === "" ? "" : `Hello ${name}`}
        </h1>
      </div>
    </div>
  );
}

export default NavBar;
