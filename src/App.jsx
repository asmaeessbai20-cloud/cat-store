import Home from "./pages/home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(cat, quantity) {
    const found = cart.find((item) => item.id === cat.id);

    if (found) {
      setCart(
        cart.map((item) =>
          item.id === cat.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...cat, quantity: quantity }]);
    }
  }

  function deleteFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Navbar count={count} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} deleteFromCart={deleteFromCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
