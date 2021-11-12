import React, { useContext } from 'react';
import { useParams } from 'react-router'
import '../App.css';
import Error from './Error'
import Navbar from './Navbar';
import { CartContext } from '../CartContext'


function SinglePage(props) {
    const cartContext = useContext(CartContext);
    const { name } = useParams();
    return (
        <div className="home-container">
            <Navbar />
            {(name <= props.productData.length && name > 0) ? <div className="">
                <img className='info-img' src={`${props.productData[name - 1].img}`} alt='/#' />
                <div className="total-price">
                    <div>  Name:  {props.productData[name - 1].title} </div>
                    <div>  Price:  ${props.productData[name - 1].price} </div>
                </div>
                <button className="home-btn" onClick={() => cartContext.onAdd(props.productData[name-1])} >Add to Cart</button>
            </div>
                :
                <Error />}
        </div>
    );
}

export default SinglePage;