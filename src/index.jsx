import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './Routes/Routes';
import { CartProvider } from 'react-use-cart'


ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Pages />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
