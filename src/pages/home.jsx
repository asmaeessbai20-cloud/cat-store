import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to CatsStore </h1>
        <p>Découvrez nos plus beaux chats.</p>
        <Link to="/products" className="btn">
          Voir les produits
        </Link>
      </div>
    </div>
  );
}

export default Home;