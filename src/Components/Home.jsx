import React, { useContext } from 'react';
import { CartContext } from '../CartContext'
import data from '../Data/Data';
import '../App.css';

function Home() {
  const cartContext = useContext(CartContext);
  const { productData } = data;

  return (
    <div className="home-container">
      <h1>All Items</h1>
      <section>
        <div className='home-row'>
          {productData.map((item, index) => {
            return (
              <div className="home-size" key={index}>
                <div className="home-shadow">
                  <img className="home-img" src={item.img} alt="" />
                  <div className="home-info ">
                    <h5>{item.title}</h5>
                    <h5>${item.price}</h5>
                    <button className="home-btn" onClick={() => cartContext.onAdd(item)} >Add to Cart</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;