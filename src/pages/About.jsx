import {FaGem, FaShippingFast, FaUserCheck} from "react-icons/fa"
import { MdBrush } from "react-icons/md"
import "./About.css"
import Aboutpic from "../assets/about.jpeg"


const About = () => {
    return(
        <section id="about">
            <div id="about-hero">
                <div className="about-info">
                    <img src={Aboutpic} alt="" />
                </div>
                <div className="about-info">
                    <h1>About DRIPSTORE</h1>
                    <p>We are a streetwear brand built for individuals who value style, confidence, and self-expression. Our mission is to create bold, high-quality pieces that reflect the energy of the streets while staying true to modern fashion trends. Every design we release is inspired by culture, creativity, and the everyday hustle of people who aren't afraid to stand out.</p><br />
                    <p>At the core of our brand is authenticity. We believe streetwear is more than clothing — it's a lifestyle, a voice, and a statement. That's why we focus on delivering designs that are not only stylish but also comfortable and versatile, making them perfect for any occasion. From oversized hoodies and graphic tees to cargos and accessories, each piece is crafted with attention to detail and quality.</p><br />
                    <p>We are committed to building a community, not just a brand. Our goal is to connect with individuals who share a passion for fashion and creativity, giving them a platform to express themselves freely. As we grow, we continue to push boundaries, explore new ideas, and stay ahead of the curve.</p><br />
                    <p>Whether you're stepping out casually or making a statement, we're here to make sure you do it with confidence and style. This is more than fashion — this is streetwear redefined.</p>
                </div>
            </div>

            <div id="our">
                <h1>Our Mission</h1>
                <p>Our mission is to redefine streetwear fashion by delivering high-quality, trendsetting apparel that empowers self-expression. We strive to combine comfort, style, and creativity, ensuring every piece resonates with individuality. Through sustainable practices, ethical sourcing, and a dedication to our community, we aim to inspire confidence, foster culture, and create a brand experience that goes beyond clothing, building lasting connections with our customers worldwide.</p>
                <hr />
                <h1>Our Vision</h1>
                <p>Our vision is to become a leading streetwear brand recognized for innovation, authenticity, and cultural influence. We aspire to shape urban fashion trends, celebrate diversity, and provide accessible, stylish clothing for everyone. By embracing sustainability, creativity, and community engagement, we aim to set new standards in the fashion industry, inspiring individuals to express themselves boldly while fostering a global movement that unites fashion enthusiasts under a shared love for street culture.</p>
            </div>

            <div id="why">
                <h1>Why choose DRIPSTORE?</h1>
                <div id="det">
                    <div className="cons">
                        <FaGem size={40}/>
                        <h3>Premium Qualitiy</h3>
                        <p>Crafted withthe finest materials for lasting comfort and durability</p>
                    </div>
                    <div className="cons">
                        <MdBrush size={40}/>
                        <h3>Unique Designs</h3>
                        <p>Bold, original designs that let you stand out in every crowd</p>
                    </div>
                    <div className="cons">
                        <FaShippingFast size={40}/>
                        <h3>Fast & Reliable</h3>
                        <p>Quick delivery and dependable service everytime you shop with us</p>
                    </div>
                    <div className="cons">
                        <FaUserCheck size={40}/>
                        <h3>Customer first</h3>
                        <p>Your satisfaction is our priority we listen support and deliver</p>
                    </div>
                </div>
            </div>

            
        </section>

    )
}

export default About;