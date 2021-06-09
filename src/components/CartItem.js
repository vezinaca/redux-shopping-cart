import React from "react";
import "./CartItem.css";
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from './Icons';

const CartItem = ({product}) => {

    const add = () => {
        console.log('click add');
    }

    const remove = () => {
        console.log('click remove');
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
                    <button onClick={remove}className="btn-remove"><MinusCircleIcon width={"20px"} /></button>
                </div>
            </div>
        </>
    )
}

export default CartItem;