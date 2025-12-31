import { useState } from "react";

const plants = [
  { id: 1, name: "Rose", price: 100, category: "Flower" },
  { id: 2, name: "Lily", price: 120, category: "Flower" },
  { id: 3, name: "Tulip", price: 110, category: "Flower" },

  { id: 4, name: "Aloe Vera", price: 150, category: "Medicinal" },
  { id: 5, name: "Tulsi", price: 90, category: "Medicinal" },
  { id: 6, name: "Mint", price: 80, category: "Medicinal" },

  { id: 7, name: "Money Plant", price: 200, category: "Indoor" },
  { id: 8, name: "Snake Plant", price: 220, category: "Indoor" },
  { id: 9, name: "Peace Lily", price: 250, category: "Indoor" }
];

export default function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <div>
      <h2>Plants</h2>

      {["Flower", "Medicinal", "Indoor"].map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter(p => p.category === category)
            .map(plant => (
              <div key={plant.id}>
                <span>{plant.name} - ₹{plant.price}</span>
                <button onClick={() => addToCart(plant)}>
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
