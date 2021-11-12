import React, { ChangeEvent, useContext, useState, useEffect } from 'react';
import { CartContext } from '../CartContext'
import data from '../Data/Data';
import '../App.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Home() {
  const cartContext = useContext(CartContext);
  const { productData } = data;
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams()
    if (searchTerm) {
      params.append("search", searchTerm)
    } else {
      params.delete("search")
    }
    navigate({search: params.toString()})
  }, [searchTerm, navigate])

  return (
    <div className="home-container">
      <h1>All Items</h1>
      <input className='search' onChange={e => { setSearchTerm(e.target.value) }} name='search' type='text' placeholder='Search Products' />
      <section>
        <div className='home-row'>
          {productData.filter(val => {
            if (searchTerm === "") {
              return val
            } else {
              if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
            }
          }
          ).reverse().map((item, index) => {
            return (
              <div className="home-size" key={index}>
                <div className="home-shadow">
                  <Link to={`/products/${item.id}`} ><img className="home-img" src={item.img} alt="" /></Link>
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