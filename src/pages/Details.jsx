import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaStar, FaBolt, FaRecycle, FaShieldAlt } from "react-icons/fa"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import "./Details.css"

const Details = () => {
    const { id } = useParams()
    const { addToCart } = useContext(CartContext)
        const [products, setProducts] = useState(null)
        const [related, setRelated] = useState([])
        const [quantity, setQuantity] = useState(1)

        const increment = () => {
            setQuantity(prevQuantity => prevQuantity + 1)
        }
        const decrement = () => {
            setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1))
        }
        useEffect (() => {
            fetch(`http://localhost:5000/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err))

            fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                const filtered = data
                .filter(item => item.id != id)
                .slice(0, 4)
                setRelated(filtered)
            })
            .catch(err => console.error(err))
        }, [id])
        if (!products) {
            return <p>Loading product...</p>
        }

    return(
        <>
        <section id="details">
            <div id="det-con">
                <div id="contentdet">
                    <div className="hero-split">
                        <img src={products.image} alt="" />
                    </div>

                    <div className="hero-split">
                        <h1>{products.title}</h1>
                        <h3>&#8358;{products.price}</h3>
                        <h5>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <span> (8,104 reviews)</span>
                        </h5>
                        <p>{products.description}</p>
                        <h6 className="stock">In Stock</h6>
                        <div className="sizes">
                            <button>Xs</button>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                        </div>
                        <div className="quantity">
                            <button onClick={decrement}>-</button>
                            <span>{quantity}</span>
                            <button onClick={increment}>+</button>
                        </div>
                        <div id="button">
                            <button
                            className="add-cart"
                            onClick={() => addToCart(products)}
                            >Add to cart</button>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>

                <div id="related">
                <h2>You Might Also Like</h2>

                    <div id="like">
                        <div className="related-grid">
                            {related.map((item, index) => (
                                <div key={item.id} className="related-card">
                                    <img src={item.image} alt="" />
                                    <h4>{item.title}</h4>
                                    <p>&#8358;{item.price}</p>
        
                                    <button
                                    className="add-cart"
                                    onClick={() => addToCart(item)}
                                    >Add to cart</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>    
                

                <div id="content-det">
                    <div className="contss">
                        <FaBolt className="icons"/>
                        <h2>Fast shipping</h2>
                        <p>Quick and reliable delivery</p>
                    </div>
                    <div className="contss">
                        <FaRecycle className="icons"/>
                        <h2>Easy Returns</h2>
                        <p>Hassle-free return policy</p>
                    </div>
                    <div className="contss">
                        <FaShieldAlt className="icons"/>
                        <h2>Secure Payment</h2>
                        <p>100% safe & trusted checkout</p>
                    </div>
                </div>
            </div>

            
        </section>
        </>
    )
}

export default Details;