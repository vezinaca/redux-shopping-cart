import React from "react";
import "./StoreItem.css";
import { Link } from "react-router-dom";
import { formatNumber } from "../utilities/utils";

import { useSelector, useDispatch } from "react-redux";

import { addToCart,
         addMoreToCart,
        selectCart,
         } from "../features/cart/cartSlice";


function importAll(r) {
let out = {};
r.keys().forEach(k => {
    out[k] = r(k).default;
});
return out;
}

//const images = importAll(require.context('./images/commandes/', false, /\.(png|jpe?g|svg)$/));
const images = importAll(require.context('../img/', false, /\.(png|jpe?g|svg)$/));

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
      
    return (
        <>         
            <div className="card">
                <div className="card--body">

                    <img className="card--img" src={product.photo} alt="problem" />
                    {/* <img className="card--image" src={images['./' + livre.image_name]} alt="problem" /> */}
                    <img className="card--image" src={images['./' + product.photo]} alt="problem" />
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