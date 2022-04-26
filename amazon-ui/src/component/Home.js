import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Header />
      <Link to="/">
        <img className="home_image"
        src={require("../component/images/slideshow/AmazonSlide (1).jpg")} />
      </Link>
    </div>
  );
}
export default Home;
