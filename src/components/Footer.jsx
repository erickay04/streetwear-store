import { FaFacebook, FaTwitter, FaTiktok, FaInstagram, FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <>
        <footer>
        <div id="footer">
            <div className="foot-details">
                <h1>DRIPSTORE</h1>
                <p>Something that defines your style and has quality <br />prices ready for thosee that choose us</p>
                <FaFacebook className="icon"/>
                <FaInstagram className="icon"/>
                <FaTiktok className="icon"/>
                <FaTwitter className="icon"/>
            </div>
            <div className="foot-details">
                <h2>Quick Links</h2>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="foot-details">
                <h2>Customer services</h2>

                <ul>
                    <li>Shopping & waranty</li>
                    <li>Returns</li>
                    <li>See Guide</li>
                    <li>FAQS</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="foot-details">
                <h2>Contact</h2>

                <ul>
                    <li><FaEnvelope/> Dripstore@gmail.com</li>
                    <li><FaPhone/> +234 913 712 2438</li>
                    <li><FaAddressCard/> Lagos, nigeria</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="footer-bot">
            <p>&copy;2026 DRIPSTORE. All rights reserved</p>
            <p>Designed for a clean streetWear experience</p>
        </div>
            
        </footer>
        </>
    )
}

export default Footer;