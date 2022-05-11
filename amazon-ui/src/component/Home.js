import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <Header />
      <Link to="/">
        <img
          className="home_image"
          src={require("../component/images/slideshow/AmazonSlide (1).jpg")}
        />
      </Link>
      <Product
        id="1"
        title="Overstock deals in Outlet"
        image1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_P_186x116_Evergreen_Oct_2021._SY116_CB640520999_.jpg"
        image2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_J_186x116_Evergreen_Oct_2021._SY116_CB640520999_.jpg"
        image3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_E_372x232_Evergreen_Oct_2021._SY232_CB640520999_.jpg"
        image4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_T_372x232_Evergreen_Oct_2021._SY232_CB640520999_.jpg"
        more="See More"
      />
    </div>
  );
}
export default Home;
