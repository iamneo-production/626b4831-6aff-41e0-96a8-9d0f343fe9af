import React from "react";
import { Link } from "react-router-dom";
import { House, ShoppingCart, SignOut } from "phosphor-react";
import { UserPlus } from "phosphor-react";
import { Phone } from "phosphor-react";
import { ShoppingBagOpen } from "phosphor-react";
import { SignIn } from "phosphor-react";

import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <House size={28} /> Home
        </Link>
        <Link to="/shop">
          <ShoppingBagOpen size={28} /> Shop
        </Link>
        <Link to="/contact">
          <Phone size={28} /> Contact
        </Link>
        <Link to="/login">
          <SignIn size={32} /> Login
        </Link>
        <Link to="/signup">
          <UserPlus size={28} /> Signup
        </Link>
        <Link to="/cart">
          <ShoppingCart size={28} /> Cart
        </Link>
        <Link to="/">
          <SignOut size={32} /> Sign Out
        </Link>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        {/* Add search functionality here */}
      </div>
    </div>
  );
};