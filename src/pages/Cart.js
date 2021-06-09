import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";
import "./Cart.css";

import { addToCart, removeFromCart, selectCart } from "../features/cart/cartSlice";



const Cart = () => {

    const cart = useSelector(selectCart);
    const disptach = useDispatch();
   
    const allItemsCart = cart?.map(product => (
        <CartItem key={product.id} product={product} />
    ))

    return (
        <>
            <h2>Cart</h2>
            <h5>This is the cart page.</h5>
            <div className='container'>                
                <div className="cartContent">
                    {allItemsCart}
                </div>
                <div className="checkoutContent">
                    <Checkout />
                </div>
            </div>
        </>
    )
}

export default Cart;