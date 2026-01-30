import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Carrinho de Compras</h2>

      {cartItems.length === 0 && <p>Seu carrinho está vazio.</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            padding: "10px 0"
          }}
        >
          <div>
            <h4>{item.name}</h4>
            <p>Preço: R$ {item.price}</p>
            <p>Quantidade: {item.quantity}</p>
          </div>

          <div>
            <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>
              +
            </button>

            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, amount: -1 }))
              }
              disabled={item.quantity <= 1}
            >
              -
            </button>

            <button onClick={() => dispatch(removeItem(item.id))}>
              Remover
            </button>
          </div>
        </div>
      ))}

      <h3>Total: R$ {totalPrice}</h3>
    </div>
  );
}

export default CartItem;
