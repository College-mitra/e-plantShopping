export default function CartItem({ cart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <p>
            {item.name} - ₹{item.price} × {item.quantity}
          </p>
        </div>
      ))}

      <h3>Total Amount: ₹{total}</h3>

      <button>Checkout (Coming Soon)</button>
      <button>Continue Shopping</button>
    </div>
  );
}
