import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Flags from "country-flag-icons/react/3x2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";


function Header() {
  return (
    <nav className="header">
      <Link to="/" className="logo">
        <img
          className="header__logo"
          src={require("../component/images/AmazonLogo.jpg")}
        />
      </Link>
      
      <Link to="/" className="header_link">
      <div className="Gps">
      <LocationOnTwoToneIcon 
      fontSize="small" /> 
      </div>
        </Link>
      <Link to="/" className="header_link">
          <div className="header_option">
          <span className="header_lineOne">Hello</span>
          <span className="header_lineTwo">Select Your Address</span>
          
            
          </div>
        </Link>
      <div className="header_search">
        <ArrowDropDownIcon
          className="dropDown"
          color="action"
          fontSize="small"
        />
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_Nav">
        <Link to="/" className="header_link">
          <div>
            <Flags.US title="United States" className="flag" />
          </div>
        </Link>

        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_lineOne">Hello,Sign in</span>
            <span className="header_lineTwo">Account&Lists</span>
          </div>
        </Link>

        <Link to="/Return" className="header_link">
          <div className="header_option">
            <span className="header_lineOne">Returns</span>
            <span className="header_lineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/Checkout" className="header_link">
          <div className="header_Basket">
            <ShoppingCartIcon
            color="white" />
            <span className="header_lineTwo header_basketCount">0</span>
            <span>Cart</span>
          </div>
        </Link>
        

      </div>
    </nav>
    
  );
}

export default Header;
