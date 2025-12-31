export default function CartItem({ cart, setCart }) {
  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <p>
            {item.name} | ₹{item.price} × {item.quantity} =
            ₹{item.price * item.quantity}
          </p>

          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}

      <h3>Total Cart Amount: ₹{totalAmount}</h3>

      <button>Checkout (Coming Soon)</button>
      <button>Continue Shopping</button>
    </div>
  );
}
