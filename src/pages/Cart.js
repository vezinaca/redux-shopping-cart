import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CheckoutComponent from "../components/CheckoutComponent";
import "./Cart.css";

import { selectCart } from "../features/cart/cartSlice";

const Cart = () => {

    const cart = useSelector(selectCart);
          
    const allItemsCart = cart?.map(product => (
        <CartItem key={product.id} product={product} />
    ))

    return (
        <>
            <h2>Cart</h2>
            <h5>This is the cart page.</h5>
            <div className='container'>                
                <div className="cartContent">
                    { cart.length === 0 ? <h4>Your cart is empty</h4> : allItemsCart}
                    {/* {allItemsCart} */}
                </div>
                <div className="checkout">
                    <CheckoutComponent />
                </div>
            </div>
        </>
    )
}

export default Cart;