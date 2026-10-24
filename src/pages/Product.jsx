import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import cats from "../data";

function Product({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const cat = cats.find((c) => c.id === Number(id));

  if (!cat) {
    return <h2 className="container">Chat introuvable</h2>;
  }

  function handleAdd() {
    if (quantity < 1) return;
    addToCart(cat, quantity);
    navigate("/cart");
  }

  return (
    <div className="container product-page">
      <img src={cat.image} alt={cat.name} className="product-img" />

      <h2>{cat.name}</h2>
      <p>Price {cat.price} $</p>

      <label>Quantity</label>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <p>Total : {cat.price * quantity} $</p>

      <button className="btn" onClick={handleAdd}>
        Ajouter au Cart
      </button>
    </div>
  );
}

export default Product;
