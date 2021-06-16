import React, { useState } from "react";
import { dummyProducts } from '../utilities/dummyProducts';
import StoreItem from "../components/StoreItem";
import "./Store.css";

const Store = () => {
    const [products] = useState(dummyProducts);
    const allStoreItems = products.map(product => (
        <StoreItem key={product.id} product={product} />
    ))    
    return (
        <>
            <h2>Store</h2>
            <h5 className="page-info">This is the store page.</h5>
            <p style={{textAlign : "left"}}>{products.length} Products</p>
            <div className="storeGrid">                
                    {allStoreItems}                
            </div>            
        </>
    )
}

export default Store;