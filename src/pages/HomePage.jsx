import React, { useState } from "react";
import ProductList from "../components/ProductsList";
import Cart from "../components/Cart";

const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div className="home-page">
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default HomePage;
