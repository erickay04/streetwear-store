import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const Shop = () => {
    const [products, setProducts] = useState([])
    const { addToCart } = useContext(CartContext)
    useEffect (() => {
        fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error(err))
    }, [])
    return(
        <>
        <section id="shop">
            <h1>All products</h1>
            <div id="shop-grid">
                <div className="shop-det">
                    <div className="details">
                        <h2>Categories</h2>
                        <h4>All products  (24)</h4>
                        <p>Hoodies (6)</p>
                        <p>Sneakers (5)</p>
                        <p>T-shirts (5)</p>
                        <p>Pants (4)</p>
                        <p>Caps (5)</p>
                    </div>
                    {/* <div className="details">

                    </div>
                    <div className="details"></div>
                    <div className="details"></div> */}
                </div>
                <div className="shop-det">
                    <div id="productpage">
                        {products.map((product, index) => (
                        <div key={product.id} className="product-det">
                            <img src={product.image} alt="" />
                            <h3>{product.title}</h3>
                            <p>&#8358;{product.price}</p>
                            <button id="btn-"><Link to={`/productdetails/${product.id}`}>View details</Link></button>
                            <button
                            className="add-cart"
                            onClick={() => addToCart(product)}
                            >Add to cart</button>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Shop;