import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice"; // ✅ bate com seu slice

export default function ProductList() {
  const dispatch = useDispatch();

  const categories = [
    {
      title: "Plantas para Interior",
      items: [
        { id: "in1", name: "Jiboia", price: 29.9, image: "/images/jiboia.jpg" },
        { id: "in2", name: "Zamioculca", price: 39.9, image: "/images/zamioculca.jpg" },
        { id: "in3", name: "Lírio-da-paz", price: 34.9, image: "/images/lirio.jpg" },
        { id: "in4", name: "Costela-de-adão", price: 59.9, image: "/images/costela.jpg" },
        { id: "in5", name: "Espada-de-São-Jorge", price: 24.9, image: "/images/espada.jpg" },
        { id: "in6", name: "Maranta", price: 44.9, image: "/images/maranta.jpg" },
      ],
    },
    {
      title: "Suculentas",
      items: [
        { id: "su1", name: "Echeveria", price: 14.9, image: "/images/echeveria.jpg" },
        { id: "su2", name: "Haworthia", price: 12.9, image: "/images/haworthia.jpg" },
        { id: "su3", name: "Jade", price: 19.9, image: "/images/jade.jpg" },
        { id: "su4", name: "Sedum", price: 11.9, image: "/images/sedum.jpg" },
        { id: "su5", name: "Aloe Vera", price: 22.9, image: "/images/aloe.jpg" },
        { id: "su6", name: "Cacto", price: 16.9, image: "/images/cacto.jpg" },
      ],
    },
    {
      title: "Plantas de Jardim",
      items: [
        { id: "ga1", name: "Lavanda", price: 27.9, image: "/images/lavanda.jpg" },
        { id: "ga2", name: "Alecrim", price: 18.9, image: "/images/alecrim.jpg" },
        { id: "ga3", name: "Hortênsia", price: 49.9, image: "/images/hortensia.jpg" },
        { id: "ga4", name: "Buxinho", price: 35.9, image: "/images/buxinho.jpg" },
        { id: "ga5", name: "Samambaia", price: 25.9, image: "/images/samambaia.jpg" },
        { id: "ga6", name: "Gerânio", price: 21.9, image: "/images/geranio.jpg" },
      ],
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // ✅ PERFEITO para seu slice
  };

  return (
    <div className="product-list">
      {categories.map(category => (
        <div key={category.title}>
          <h3>{category.title}</h3>

          <div className="products">
            {category.items.map(product => (
              <div key={product.id}>
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>R$ {product.price.toFixed(2)}</p>

                <button onClick={() => handleAddToCart(product)}>
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
