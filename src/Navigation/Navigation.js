import React from "react";
import "./Navigation.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";

function Navigation() {
  const [{ basket, money }] = useStateValue();
  return (
    <div className="navigation">
      <img
        className="navigation__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <input className="navigation_search" type="text" />
      <SearchIcon className="navigation_searchIcon" />
      <div className="navigation_right">
        <div className="navigation_right_top">Hello Guest</div>
        <div className="navigation_right_bottom"> Sign In</div>
      </div>

      <div className="navigation_right">
        <div className="navigation_right_top">Returns</div>
        <div className="navigation_right_bottom"> & Orders</div>
      </div>

      <div className="navigation_right">
        <div className="navigation_right_top">Your</div>
        <div className="navigation_right_bottom"> Prime</div>
      </div>
      <ShoppingBasketIcon className="navigation_right" />
      <div className="navigation_right nav_count">{money}</div>
    </div>
  );
}

export default Navigation;
