import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import "./StoreItem.css";

const StoreItem = ({ product }) => {

    // const btnStyle = {
    //     backgroundColor: 'black',
    //     color: 'white',
    //     borderRadius: '0%',
    //     fontSize: '8px',
    //     padding: '5px 10px',
    //     border: 'none'
    // }

    const handleClick = () => {
        console.log('click add to cart');
    }

    return(
        <>
            <Card className="my-card">
                <Card.Body>
                    <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" src={product.photo} alt="problem" />
                    <p className="text-left">{product.name}</p>
                    <h5 className="text-left">${product.price}</h5>
                    <div className="text-right les-boutons">
                        <button className="btn-myDetails">DETAILS</button>
                        <button className="btn-myAdd" onClick={handleClick}>ADD TO CART</button>
                        {/* <Button style={btnStyle} size='sm'>ADD TO CART</Button> */}
                    </div>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default StoreItem;