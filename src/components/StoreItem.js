import React from "react";
import "./StoreItem.css";
import { Link } from "react-router-dom";
import { formatNumber, images } from "../utilities/utils";

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

    console.log("image sans bar: ", product.photo);
    console.log("image: ", './' + product.photo);
    console.log("[images[product.photo]: ", images[product.photo]);
    console.log("tableau image: ", images);
      
    return (
        <>         
            <div className="card">
                <div className="card--body">
                    
                    {/* <img className="card--img" src={product.photo} alt="problem" /> */}
                    {/* <img className="card--img" src={images['./' + livre.image_name]} alt="problem" /> */}
                    <img className="card--img" src={images['./' + product.photo]} alt="problem" />
                    <div className="card--info">
                     
                        <p >{product.name}</p>
                        <h2>{formatNumber(product.price)}</h2>
                    </div>
                    <div className="les-boutons">
                        <button className="btn-myDetails" onClick={handleDetails}><Link to={`/store/${product.id}`}> DETAILS</Link></button>
                        <button className={!isInCart ? 'btn-my-add' : 'btn-add-more'} onClick={handleAdd}>{!isInCart ? 'ADD TO CART' : 'ADD MORE' }</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default StoreItem;