import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

export default function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleStart = () => {
    setShowProducts(true);
    setShowCart(false);
  };

  const handleGoToCart = () => {
    setShowCart(true);
    setShowProducts(false);
  };

  const handleGoToProducts = () => {
    setShowProducts(true);
    setShowCart(false);
  };

  return (
    <div className="app-container">
      {!showProducts && !showCart && (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <button onClick={handleStart}>Começar</button>
        </div>
      )}

      {showProducts && (
        <div>
          <button onClick={handleGoToCart}>Ir para Carrinho</button>
          <ProductList />
        </div>
      )}

      {showCart && (
        <div>
          <button onClick={handleGoToProducts}>Voltar para Produtos</button>
          <CartItem />
        </div>
      )}
    </div>
  );
}
