import React from "react";
import "./CheckoutComponent.css";
import { useSelector } from "react-redux";
import { selectCartInfo } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import Checkout from "../pages/Checkout";

const CheckoutComponent = () => {

    const cartInfo = useSelector(selectCartInfo);

    return (
        <>
                <div className="checkoutContent">
                    <p>Total Items </p>
                    <h5>{cartInfo.itemCount}</h5>
                    <p>Total Payment</p>
                    <h5>${cartInfo.total}</h5>
                    <div className="buttonsDiv">
                        <Link to="./checkout"><button className="btn-checkout">checkout</button></Link>
                        <button className="btn-clear">Clear</button>
                    </div>
                </div>
            
        </>
    )
}

export default CheckoutComponent;