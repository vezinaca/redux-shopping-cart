import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import "./StoreItem.css";

import { useSelector, useDispatch } from "react-redux";

import { addToCart,
         removeFromCart,
        selectCart,
         } from "../features/cart/cartSlice";

const StoreItem = ({ product }) => {
    
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    // cart.cartItems.forEach(cartItem => {
    //    console.log('cartItem dans StoreItem: ', cartItem); 
    // })

    const handleClick = (e) => {
        //console.log('click add to cart: ', product);
        //console.log('cart dans StoreItem: ', cart);
        dispatch(addToCart(product));
    }

    return (
        <>
            <Card className="my-card">
                <Card.Body>
                    <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" src={product.photo} alt="problem" />
                    <p className="text-left">{product.name}</p>
                    <h5 className="text-left">${product.price}</h5>
                    <div className="text-right les-boutons">
                        <button className="btn-myDetails">DETAILS</button>
                        <button className="btn-myAdd" onClick={handleClick}>ADD TO CART</button>
                        {/* <Button style={btnStyle} size='sm'>ADD TO CART</Button> */}
                    </div>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default StoreItem;