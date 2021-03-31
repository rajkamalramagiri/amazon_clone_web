import React from "react";
// import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import { connect } from "react-redux";

import { removeFromBasket } from "../redux/action";

function Checkout(props) {
  // const [{ basket }, dispatch] = useStateValue();
  const handleRemove = (item) => {
    item = {
      id: item.id,
    };
    props.removeFromBasket(item);
    // dispatch({
    //   type: "REMOVE_FROM_BASKET",
    //   item: {
    //     id: item.id,
    //   },
    // });
  };

  console.log("basket");
  return (
    <div className="checkout">
      <div className="checkout__letf">
        <img
          className="checkout__headerImg"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

        {props.basket.length == 0 ? (
          <div>
            <h2> Your shopping cart is empty</h2>
          </div>
        ) : (
          <div>
            <div className="checkout__header_top">Hello,</div>
            <div className="checkout__subheading">Your shopping Basket</div>

            {props.basket.map((product) => {
              return (
                <div className="checkout_products">
                  <div className="checkout_product">
                    <div className="checkout_product_image_div">
                      <img
                        className="checkout_product_image"
                        src={product.image}
                      />
                    </div>
                    <div className="checkout_product_description">
                      <div className="checkout_product_description_title">
                        {product.title}
                      </div>

                      <div style={{ marginBottom: "5px" }}>
                        $<strong>{product.price}</strong>
                      </div>
                      <div
                        className="product_rating"
                        style={{ marginBottom: "5px" }}
                      >
                        {Array(product.rating)
                          .fill()
                          .map((_, i) => (
                            <p>🌟</p>
                          ))}
                      </div>
                      <div>
                        <button
                          className="product_button"
                          onClick={() => handleRemove(product)}
                        >
                          Remove from Basket
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="checkout__right">
        <div className="checkout_subtottal">
          Subtotal ({props.basket.length} items):
          <div className="checkout_subtotal_price">
            {props.basket.reduce(
              (acc, item) => (acc = Number(item.price) + acc),
              0
            )}
          </div>
        </div>
        <button className="checkout__button">Proceed to Checkout</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { basket: state.basket };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromBasket: (item) => dispatch(removeFromBasket(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
