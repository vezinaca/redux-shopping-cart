import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import { selectCartInfo } from "../features/cart/cartSlice";

const Checkout = () => {

    const cartInfo = useSelector(selectCartInfo);

    return (
        <>
                <div className="checkoutContent">
                    <p>Total Items </p>
                    <h5>{cartInfo.itemCount}</h5>
                    <p>Total Payment</p>
                    <h5>${cartInfo.total}</h5>
                    <div className="buttonsDiv">
                        <button className="btn-checkout">Checkout</button>
                        <button className="btn-clear">Clear</button>
                    </div>
                </div>
            
        </>
    )
}

export default Checkout;