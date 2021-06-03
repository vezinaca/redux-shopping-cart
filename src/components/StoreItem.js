import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import "./StoreItem.css";


const StoreItem = ({ product }) => {
    return(
        <>
            <Card className="my-card">
                <Card.Body>
                    <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" src={product.photo} alt="problem" />
                    <p>{product.name}</p>
                    <h3 className="text-left">{product.price}</h3>
                    <Button className="text-right">Add to Cart</Button>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default StoreItem;