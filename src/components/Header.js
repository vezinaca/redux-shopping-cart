import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import imgCart from './cart.png';
import logoClothes from "../clothes-logo.jpg";
import { useSelector } from "react-redux";
import { selectCartInfo } from "../features/cart/cartSlice";

 const Header = () => {

    const cartInfo = useSelector(selectCartInfo);
    // const 


    const handleActive = () => {
        console.log('active');
    }

    return (
        <div className="header">
            <nav className="nav">
                
                <Link to="/store">                        
                    <li>
                        <div className="logo">
                            <i class="fas fa-tshirt fa-lg"></i>
                            <h1>Clothes</h1>
                        </div>
                    </li>                        
                </Link>
                <ul className="ul">                    
                    <Link to="/store"><li>Store</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/cart">
                        <div className="cart-stuff">
                        <li>    
                            <img    className="cartLogo" 
                                    src={imgCart} 
                                    width="15px" 
                                    alt="problem"
                            />
                            Cart ({cartInfo.itemCount})
                        </li>
                        </div>
                    </Link>
                </ul>
                <div className="hamburger-toggle" onClick={handleActive}>
                    <i className="fas fa-bars fa-lg"></i>
                </div>
            </nav>   
        </div>
    )
}

export default Header;