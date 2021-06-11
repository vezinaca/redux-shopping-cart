import React from "react";
import "./CartItem.css";
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from './Icons';

import { useDispatch } from "react-redux";

import { 
         addMoreToCart,
        selectCart,
        removeFromCart,
        decreaseFromCart
         } from "../features/cart/cartSlice";

const CartItem = ({product}) => {

    const dispatch = useDispatch();
    const isMoreThanOne = (product.quantity > 1) === true;

    const add = () => {
        console.log('dans cart Item : add more to cart');
        dispatch(addMoreToCart(product));
    }

    const remove = () => {
        
        if (!isMoreThanOne)
        {
            console.log('dans cart Item : remove from cart');
            dispatch(removeFromCart(product));
        }
        else 
        {
            console.log('dans cart Item : decrease from cart');
            dispatch(decreaseFromCart(product));
        }
    }

    return (
        <>
            <div className="cartItem">
                <img src={product.photo} width="45px" alt="problem" />
                <div className="productInfo">
                    <h5>{product.name}</h5>
                    <p>Price: ${product.price}</p>
                </div>
                <div className="quantity">
                    <p>Qty: {product.quantity}</p>
                </div>
                <div className="twoButtons">
                    <button onClick={add} className="btn-add"><PlusCircleIcon width={"20px"}/></button>
                    <button onClick={remove}className="btn-remove">{ isMoreThanOne ? <MinusCircleIcon width={"20px"} /> : <TrashIcon width={"20px"} />} </button>
                </div>
            </div>
        </>
    )
}

export default CartItem;