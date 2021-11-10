import React from 'react';
import ReactDOM from 'react-dom';
import { CartProvider } from './CartContext';
import Pages from './Routes/Routes';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Pages />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
