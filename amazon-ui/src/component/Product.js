import React from "react";
import "./Product.css";

function Product({ id, title, image1, image2, image3, image4 , more}) {
  return (
    <div className="product">
      <div className="product_info">
      <ul className="grid">
        <li><p>{title}</p></li>
       <li> <img className="grid_img" src={image1} />jewelry</li>
       <li><img className="grid_img" src={image2} />Pets</li>
       <li><img className="grid_img" src={image3} />Electronics</li>
       <li><img className="grid_img" src={image4} />Toys</li>
        <li><a className="more" href="/">{more}</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
