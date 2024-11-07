import React from 'react'
import { useSelector } from 'react-redux'
import { getItemsSelector } from '../../redux/slices/cartSlice';
function Cart() {
    const items = useSelector(getItemsSelector);
    const total = items.reduce((a, b) => a + b.price, 0 )
    console.log("items", items);
    
  return (
    <h1 className=''>Total Items: {items.length} (${total})/-</h1>
  )
}

export default Cart