import { Link } from "react-router-dom";
import '../index.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="site-brand">
          <span className="site-brand-mark" aria-hidden="true">🌿</span>
          <div>
            <h1 className="site-title">Flowerplant</h1>
            <p className="site-subtitle">Indoor plant care companion</p>
          </div>
        </div>
        <nav className="site-nav">
          <Link to="/" className="site-nav-link">Home</Link>
          <Link to="/myPlants" className="site-nav-link">My Plants</Link>
          <Link to="/about" className="site-nav-link">About</Link>
        </nav>
      </div>
    </header>
  )
}