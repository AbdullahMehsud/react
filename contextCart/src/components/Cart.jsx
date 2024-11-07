import React from 'react'
import { useContext } from 'react'
import { useCart } from '../context/CartContext'


function Cart() {
    const cart = useCart();
    const total = cart.items.reduce((a, b) => a + b.price, 0)
  return (
    <div className='cart'>
        <h1>Cart</h1>
        {
            cart && cart.items.map( (item, index) => (
            <li key={index}> 
                {item.name} - ${item.price}
            </li>
        ))}
        <h5>Total Bill: ${total}</h5>
    </div>
  )
}

export default Cart