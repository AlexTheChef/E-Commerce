import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from '../Components/Cart';
import App from '../App'
import Error from '../Components/Error';

function Pages() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App />}></Route>
                    <Route exact path="/Cart" element={<Cart />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default Pages;