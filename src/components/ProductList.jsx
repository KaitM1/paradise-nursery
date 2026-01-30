import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";

const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 120,
    image: "https://via.placeholder.com/200x200?text=Monstera"
  },
  {
    id: 2,
    name: "Ficus Lyrata",
    price: 150,
    image: "https://via.placeholder.com/200x200?text=Ficus"
  },
  {
    id: 3,
    name: "Samambaia",
    price: 60,
    image: "https://via.placeholder.com/200x200?text=Samambaia"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Paradise Nursery</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              textAlign: "center"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%" }}
            />
            <h3>{product.name}</h3>
            <p>R$ {product.price}</p>

            <button onClick={() => dispatch(addItem(product))}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
