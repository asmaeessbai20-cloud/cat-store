import { Link } from "react-router-dom";
import cats from "../data";

function Products() {
  return (
    <div className="container">
      <h1 className="title">Products</h1>

      <div className="products">
        {cats.map((cat) => (
          <div className="card" key={cat.id}>
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
            <p>Price {cat.price} $</p>
            <Link to={"/product/" + cat.id} className="btn">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
