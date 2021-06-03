import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

 const Header = () => {
    return (
        <div>
            <nav className="nav">
                <ul className="ul">
                    <Link to="/store"><li>Store</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/cart"><li>Cart</li></Link>
                </ul>
            </nav>   
        </div>
    )
}

export default Header;