import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StoreItem from "../components/StoreItem";

import { addToCart, removeFromCart, selectCart } from "../features/cart/cartSlice";



const Cart = () => {

    const cart = useSelector(selectCart);
    const disptach = useDispatch();
    //console.log("cart dans page Cart: ", cart);

    // cart?.forEach(item => {
    //     console.log('item dans cart: ', item);
    // })

    const allItemsCart = cart?.map(product => (
        <StoreItem key={product.id} product={product} />
    ))

    return (
        <>
            <h2>Cart</h2>
            <h5>This is the cart page.</h5>
            {allItemsCart}
        </>
    )
}

export default Cart;