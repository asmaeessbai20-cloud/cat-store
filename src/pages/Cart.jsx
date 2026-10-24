import { Link } from "react-router-dom";

function Cart({ cart, deleteFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h1>Cart</h1>

      {cart.length === 0 && <p>Votre panier est vide.</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price {item.price} $</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: {item.price * item.quantity}</p>
          <button className="btn delete" onClick={() => deleteFromCart(item.id)}>
            Delete
          </button>
        </div>
      ))}

      <h2 className="cart-total">Total: {total}</h2>

      <Link to="/products" className="btn">
        Continue shopping
      </Link>
    </div>
  );
}

export default Cart;