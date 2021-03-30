import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, rating, imageUrl }) {
  const [{ basket }, dispatch] = useStateValue();
  const handleClick = () => {
    dispatch({
      type: "ADD_TO_BASKET",

      item: {
        id: id,
        title: title,
        image: imageUrl,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div>
        <div>{title}</div>
        <div className="flexPrice">
          <span>$</span>
          <div className="product__price">{price}</div>
        </div>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img className="product_image" src={imageUrl} />
      <button onClick={handleClick} className="product_button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
