import { FaShoppingCart, FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>DRIPSTORE</h1>

      <nav>
        <ul>
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
    </header>
    
  );
};

export default Header;
