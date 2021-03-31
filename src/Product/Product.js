import React from "react";
import "./Product.css";
// import { useStateValue } from "../StateProvider";
import { connect } from "react-redux";
import { addToBasket } from "../redux/action";

function Product(props) {
  // const [{ basket }, dispatch] = useStateValue();
  const { id, title, price, rating, imageUrl } = props;
  const handleClick = () => {
    const item = {
      id: id,
      title: title,
      image: imageUrl,
      price: price,
      rating: rating,
    };
    props.addToBasket(item);
    // dispatch({
    //   type: "ADD_TO_BASKET",
    //   item: {
    //     id: id,
    //     title: title,
    //     image: imageUrl,
    //     price: price,
    //     rating: rating,
    //   },
    // });
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

const mapStateToProps = (state) => {
  return { basket: state.basket };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (item) => dispatch(addToBasket(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
