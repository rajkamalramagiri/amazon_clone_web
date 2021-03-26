import React from "react";
import "./Product.css";

function Product({ title, price, rating, imageUrl }) {
  return (
    <div className="product">
      <div>
        <div>{title}</div>
        <div>{price}</div>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img className="product_image" src={imageUrl} />
      <button className="product_button">Add to Basket</button>
    </div>
  );
}

export default Product;
