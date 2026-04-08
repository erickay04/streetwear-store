import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { addToCart } = useContext(CartContext)
  useEffect(() => {
    fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data.slice(0, 4))
      setCategoryProducts(data.slice(4, 8))
    })
    .catch((err) => console.log(err));
  }, []);

  return(
    <>
    <section id="home">
    <section id="hero">
      <h1>StreetWear <br />That Speaks <br />for you</h1>
      <p>bold elegant outfit premium quality unapologetically you</p>
      <button><Link to="/products">Shop Now</Link></button>
    </section>

    <section id="feature">
      <h2>Featured Products</h2>
      <div id="feat">
        {products.map((item, index) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>&#8358;{item.price}</p>
            <button id="btn"><Link to={`/productdetails/${item.id}`}>View details</Link></button>
            <button
            className="add-cart"
            onClick={() => addToCart(item)}
            >Add to cart</button>
          </div>
        ))}
      </div>
    </section>

    <section id="category">
      <h2>Shop By Category</h2>
      <div id="cat">
      {categoryProducts.map((item, index) => (
        <div key={item.id}  className="categoryp-card">
          <img src={item.image} alt="" />
          <p>{item.category}</p>
        </div>
      ))}
      </div>
    </section>

    <section id="newsletter">
      <div className="news-grid">
        <h1>GET 10% OFF YOUR <br />FIRST ORDER</h1>
        <p>Join our community and grab 10% off your first order </p>
      </div>

      <div className="news-grid">
        <input type="email" placeholder="Enter Your Email"/>
        <button>Get Discount</button>
      </div>
    </section>
    </section>
    </>
  )
}

export default Home;