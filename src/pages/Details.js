import React, { useState } from "react";
import { dummyProducts } from '../utilities/dummyProducts';
import CartItem from "../components/CartItem";
import "./Details.css";

const Details = ({ match }) => {

    const [products] = useState(dummyProducts);
    const idDetail = match.params.id;
       
    const produit = products.find(item => item.id == idDetail);
    
    
    return(
        <>
        <h3>Details page</h3>
        <div className="details">
            <img src={produit.photo} alt="problem" width="350px"/>
            <div className="product-infos">
                <p>id : {produit.id}</p>
                <p>Name: {produit.name} </p>
                <p>Price: {produit.price}</p>
            </div>

        </div>
        </>
    )
}

export default Details;