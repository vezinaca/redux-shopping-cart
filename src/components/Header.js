import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import imgCart from './cart.png';
import { useSelector } from "react-redux";
import { selectCart } from "../features/cart/cartSlice";

 const Header = () => {

    const cart = useSelector(selectCart);

    return (
        <div>
            <nav className="nav">
                <ul className="ul">
                    <Link to="/store"><li>Store</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/cart"><li><img className="cartLogo" src={imgCart} width="15px" alt="problem"/>Cart ({cart.length})</li></Link>
                </ul>
            </nav>   
        </div>
    )
}

export default Header;