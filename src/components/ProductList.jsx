import { useState } from "react";

const plants = [
  // Flower Plants (6)
  { id: 1, name: "Rose", price: 100, category: "Flower" },
  { id: 2, name: "Lily", price: 120, category: "Flower" },
  { id: 3, name: "Tulip", price: 110, category: "Flower" },
  { id: 4, name: "Sunflower", price: 90, category: "Flower" },
  { id: 5, name: "Jasmine", price: 130, category: "Flower" },
  { id: 6, name: "Marigold", price: 80, category: "Flower" },

  // Medicinal Plants (6)
  { id: 7, name: "Aloe Vera", price: 150, category: "Medicinal" },
  { id: 8, name: "Tulsi", price: 90, category: "Medicinal" },
  { id: 9, name: "Mint", price: 70, category: "Medicinal" },
  { id: 10, name: "Neem", price: 140, category: "Medicinal" },
  { id: 11, name: "Basil", price: 85, category: "Medicinal" },
  { id: 12, name: "Ashwagandha", price: 160, category: "Medicinal" },

  // Indoor Plants (6)
  { id: 13, name: "Money Plant", price: 200, category: "Indoor" },
  { id: 14, name: "Snake Plant", price: 220, category: "Indoor" },
  { id: 15, name: "Peace Lily", price: 250, category: "Indoor" },
  { id: 16, name: "Spider Plant", price: 180, category: "Indoor" },
  { id: 17, name: "Areca Palm", price: 300, category: "Indoor" },
  { id: 18, name: "ZZ Plant", price: 270, category: "Indoor" }
];

export default function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, { ...plant, quantity: 1 }]);
  };

  const categories = ["Flower", "Medicinal", "Indoor"];

  return (
    <div>
      <h2>Plant Categories</h2>

      {categories.map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter(plant => plant.category === category)
            .map(plant => (
              <div key={plant.id}>
                <p>
                  {plant.name} - ₹{plant.price}
                </p>
                <button onClick={() => addToCart(plant)}>
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      ))}

      <h4>Total Items in Cart: {cart.length}</h4>
    </div>
  );
}
