import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
function Counter() {
    const counterContext = useContext(CounterContext);
  return (
    <>
    <li>
    <button onClick={() => counterContext.setCount(counterContext.count + 1)}>Increment</button>
    <button onClick={() => counterContext.setCount(counterContext.count - 1)}>Decrement</button>
    </li>
    </>
  )
}

export default Counter