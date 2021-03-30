import React from "react";
import MiddleImage from "../MiddleImage/MiddleImage";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div>
      <MiddleImage />
      <div className="product_middle">
        <Product
          id="1"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price="11.96"
          rating={5}
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />

        <Product
          id="2"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price="239"
          rating={5}
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>

      <div className="product_middle">
        <Product
          id="3"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price="199.99"
          rating={3}
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />

        <Product
          id="4"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price="98.99"
          rating={5}
          imageUrl="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />

        <Product
          id="5"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price="598.99"
          rating={4}
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>

      <div className="product_middle">
        <Product
          id="6"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price="1094.98"
          rating={5}
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
