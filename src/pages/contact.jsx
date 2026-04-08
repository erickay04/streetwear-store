import "./Contact.css"
import { FaFacebook, FaTwitter, FaTiktok, FaInstagram, FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa"

const Contact = () =>{
    return(
        <>
        <section id="contact">
            <div id="contact-d">
                <h1>Contact Us</h1>
                <h2>Get in touch with us</h2>
            </div>
            <div id="cont-hero">
                <div className="hero-1">
                    <h1> Contact Information</h1>
                    <ul>
                        <li><FaEnvelope/> Dripstore@gmail.com</li>
                        <li><FaPhone/> +234 913 712 2438</li>
                        <li><FaAddressCard/> Lagos, nigeria</li>
                    </ul>
                    <hr />
                    <h3>Follow Us</h3>
                    <div className="icon-d">
                        <FaInstagram className="icon"/>
                        <FaFacebook className="icon"/>
                        <FaTiktok className="icon"/>
                        <FaTwitter className="icon"/>
                    </div>
                </div>

                <div className="hero-1">
                    <h1>Get in touch</h1>
                    <form action="">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                        <input type="text" placeholder="Subject"/>
                        <textarea name="message" placeholder="Message" rows={5}></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>

            <div id="map">
                <h2>Find Us On The Map</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.49824661635!2d3.4504166261320504!3d6.450198136626252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf452da3bd44b%3A0x47331fb41adc9d28!2sLekki%20Phase%201%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1774712484888!5m2!1sen!2sng" height="400" style={{border:0}} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        </>
    )
}

export default Contact;