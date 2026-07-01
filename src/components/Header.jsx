import { FaShoppingCart, FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header>
      <h1>DRIPSTORE</h1>

      <nav>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Shop</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> 
      </nav>

      <div>
        <Link to="/cart"><FaShoppingCart className="icon"/></Link>
        <Link to="/create"><FaUser className="icon"/></Link>
      </div>
      <div className="burger"
        onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

    </header>
    
  );
};

export default Header;
