import React from "react";
import "./CheckoutComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCartInfo, selectCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

import { clearCart } from "../features/cart/cartSlice";

const CheckoutComponent = () => {

    const cartInfo = useSelector(selectCartInfo);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch()

    const handleClear = () => {
        const testCart = 0;
        dispatch(clearCart(testCart));
        //dispatch(testCarl);
        //cart = [];
        console.log('clear');  
        console.log(cart);     
    }

    return (
        <>
                <div className="checkoutContent">
                    <p>Total Items </p>
                    <h5>{cartInfo.itemCount}</h5>
                    <p>Total Payment</p>
                    <h5>${cartInfo.total}</h5>
                    <div className="buttonsDiv">
                        <Link to="./checkout"><button className="btn-checkout">checkout</button></Link>
                        <button className="btn-clear" onClick={handleClear}>Clear</button>
                    </div>
                </div>
            
        </>
    )
}

export default CheckoutComponent;