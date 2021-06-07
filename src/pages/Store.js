import React, { useState } from "react";
import { dummyProducts } from '../utilities/dummyProducts';
import StoreItem from "../components/StoreItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Store = () => {

    const [products] = useState(dummyProducts);

    const allStoreItems = products.map(product => (
        <StoreItem key={product.id} product={product} />
    ))
    
    return (
        <>
            <h2>Store</h2>
            <h5>This is the store page.</h5>
            <p className="text-left">10 Products</p>
            <div className="storeGrid">
                <Row >
                    {allStoreItems}
                </Row>
            </div>
            
        </>
    )
}

export default Store;