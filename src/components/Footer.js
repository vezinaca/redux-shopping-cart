import React from "react";

const year = new Date().getFullYear()

const Footer = () => {
    return(
        <>
            <footer className="footer">
                <h6>{year} © React Redux</h6>
            </footer>
        </>
    )
}

export default Footer;