import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';


function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-home">  <h3>Home</h3> </Link>
            <Link to="/Cart" className="navbar-cart"> <h4>Cart</h4> </Link>
        </nav>
    );
}

export default Navbar;