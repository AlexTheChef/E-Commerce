import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from '../Components/Cart';
import App from '../App'
import Error from '../Components/Error';
import SinglePage from '../Components/SinglePage';
import data from '../Data/Data';


function Pages() {
    const { productData } = data;
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App />}></Route>
                    <Route exact path="/Cart" element={<Cart />}></Route>
                    <Route exact path="/products/:name" element={<SinglePage productData={productData} />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default Pages;