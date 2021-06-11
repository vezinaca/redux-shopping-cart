import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import "./StoreItem.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { addToCart,
         addMoreToCart,
        selectCart,
         } from "../features/cart/cartSlice";

const StoreItem = ({ product }) => {
    
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const isInCart = cart.findIndex(item => item.id === product.id) !== -1
    
    const handleAdd = (e) => {        

        if (isInCart){
            dispatch(addMoreToCart(product))
            

        } else{
            dispatch(addToCart(product));
            
        } 
    }

    const handleDetails = () => {
        console.log('click details');
    }

    return (
        <>
            <Card className="my-card">
                <Card.Body>
                    <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" src={product.photo} alt="problem" />
                    <p className="text-left">{product.name}</p>
                    <h5 className="text-left">${product.price}</h5>
                    <div className="text-right les-boutons">
                        <button className="btn-myDetails" onClick={handleDetails}><Link to={`/store/${product.id}`}> DETAILS</Link></button>
                        <button className={!isInCart ? 'btn-my-add' : 'btn-add-more'} onClick={handleAdd}>{!isInCart ? 'ADD TO CART' : 'ADD MORE' }</button>
                    </div>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default StoreItem;