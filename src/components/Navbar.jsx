import { Link } from "react-router-dom";

function Navbar({ count }) {
  return (
    <nav className="navbar">
      <h2 className="logo">CatsStore</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <Link to="/cart" className="cart-icon">
        🛒 <span className="badge">{count}</span>
      </Link>
    </nav>
  );
}

export default Navbar;