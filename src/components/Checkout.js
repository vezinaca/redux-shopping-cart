import React from "react";
import "./Checkout.css";

const Checkout = () => {
    return (
        <>
                <div className="checkoutContent">
                    <p>Total Items </p>
                    <h5>2</h5>
                    <p>Total Payment</p>
                    <h5>$297.03</h5>
                    <div className="buttonsDiv">
                        <button className="btn-checkout">Checkout</button>
                        <button className="btn-clear">Clear</button>
                    </div>
                </div>
            
        </>
    )
}

export default Checkout;