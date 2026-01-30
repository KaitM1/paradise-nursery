import React from "react";
import { useDispatch } from "react-redux";

// AJUSTE ESSE IMPORT pro caminho real do teu cartSlice:
import { addItem, removeItem, updateQuantity } from "../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // Se você prefere incrementar via updateQuantity:
    // dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));

    // Se teu reducer addItem já incrementa quando existe:
    dispatch(addItem(item));
  };

  const handleDecrement = () => {
    const newQty = (item.quantity || 0) - 1;

    // ✅ requisito: se chegar em 0, remove do carrinho
    if (newQty <= 0) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: newQty }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const itemTotal = () => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;
    return (price * qty).toFixed(2);
  };

  // ✅ requisito: botão Checkout com alguma lógica
  const handleCheckout = () => {
    alert("Checkout successful!");
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <div className="cart-item">
        <div className="cart-item-details">
          <h3>{item.name}</h3>
          <p>Price: ${Number(item.price).toFixed(2)}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${itemTotal()}</p>
        </div>

        <div className="cart-item-actions">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>

      <div className="checkout-section">
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
