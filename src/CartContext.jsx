import React, { useState, useEffect } from "react";

export const CartContext = React.createContext()

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('cartItems')
        if (data) {
            setCartItems(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    })

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
            )
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)
            )
        }
    }

    const emptyCart = () => {
        setCartItems([])
    }

    return (
        <CartContext.Provider value={{ cartItems, onAdd, onRemove, emptyCart }}>
            {props.children}
        </CartContext.Provider>
    )
}