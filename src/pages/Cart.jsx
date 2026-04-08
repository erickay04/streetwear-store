import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import "./cart.css"

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
    <div id="cart">
    <section id="cart-page">

      <h1>Shopping Cart</h1>

      <div className="cart-container">

        <div className="cart-items">

          <div className="cart-header">
            <p style={{marginLeft: "30px"}}>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>

          {cart.map((item, index) => (
            <div key={index} className="cart-row">

                

              <div className="product-info">
                <button onClick={() => removeFromCart(item.id) } id="on-btn">x</button>
                <img src={item.image} alt="" />
                <span>{item.title}</span>
              </div>

              <p>&#8358;{item.price}</p>

                <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>

              <p>&#8358;{item.price * item.quantity}</p>

            </div>
          ))}

        </div>

        <div className="cart-summary">

          <h2>Cart Summary</h2>

          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₦{subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="summary-row total">
            <span>Total:</span>
            <span>₦{subtotal}</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </section>
    </div>
    </>
  );
};

export default Cart;