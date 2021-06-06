import React from "react";
import { useSelector } from "react-redux";

import {
    addToCart,
    removeFromCart,
    selectCart,
} from "../features/cart/cartSlice";

const Cart = () => {

    const cart = useSelector(selectCart);
    console.log(cart);


    return (
        <>
            <h2>Cart</h2>
            <h5>This is the cart page.</h5>
        </>
    )
}

export default Cart;