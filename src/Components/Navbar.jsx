import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <Link to="/" className="navbar-brand my-2 mx-5">  <h3>Home</h3> </Link>
            <Link to="/Cart" className="navbar-brand my-2 mx-5"> <h4>Cart</h4> </Link>
        </nav>
    );
}

export default Navbar;