import React, { useContext } from 'react';
import { CartContext } from '../CartContext'
import '../App.css';
import Navbar from './Navbar';

function Cart(props) {
  const contextValue = useContext(CartContext)
  const totalPrice = contextValue.cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  return (
    <div className="home-container">
      <Navbar />
      <div>{contextValue.cartItems.length === 0 && <h1>Cart is Empty</h1>}</div>
      {contextValue.cartItems.map((item) => (
        <div key={item.id} className="cart-container">
          <div className="cart-title">{item.title}</div>
          <div className="cart-btn">
            <button onClick={() => contextValue.onRemove(item)} className="remove">-</button>
            <button onClick={() => contextValue.onAdd(item)} className="add">+</button>
          </div>

          <div className="cart-price">
            {item.qty} x ${item.price}
          </div>
        </div>
      ))}

      {contextValue.cartItems.length !== 0 && (
        <div className='cart-info'>
          <hr></hr>
          <div className="total-price">
            <div >
              <strong>Total Price</strong>
            </div>
            <div >
              <strong>${totalPrice}</strong>
            </div>
          </div>
          <hr />
          <div className='cart-buttons'>
            <button className="home-btn" onClick={() => alert(`Checkout's working!`)}>
              Checkout
            </button>
            <button className="home-btn-red" onClick={() => contextValue.emptyCart()}>Empty Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;