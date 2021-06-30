import React, { useState } from "react";
import { dummyProducts } from '../utilities/dummyProducts';
import "./Details.css";
import { useDispatch, useSelector } from "react-redux";

import { addToCart,
    addMoreToCart,
   selectCart,
    } from "../features/cart/cartSlice";

const Details = ({ match }) => {

    const [products] = useState(dummyProducts);
    const idDetail = match.params.id;
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
       
    const produit = products.find(item => item.id == idDetail);

    const isInCart = cart.findIndex(item => item.id === produit.id) !== -1
    
    const handleAdd = (e) => {        

        if (isInCart){
            dispatch(addMoreToCart(produit))            

        } else{
            dispatch(addToCart(produit));
            
        } 
    }
    
    
    return(
        <>
        <h3>Details page</h3>
        <div className="details">
            <img src={produit.photo} alt="problem" width="350px"/>
            <div className="product-infos">
                <h3>Product Info</h3>
                <p>Name: {produit.name} </p>
                <p>Price: ${produit.price}</p>
                <p>Material: {produit.material}</p>
                <p>Brand: {produit.brand}</p>
                <button className={!isInCart ? 'btn-my-add' : 'btn-add-more'} onClick={handleAdd}>{!isInCart ? 'ADD TO CART' : 'ADD MORE' }</button>                
            </div>
        </div>
        </>
    )
}

export default Details;