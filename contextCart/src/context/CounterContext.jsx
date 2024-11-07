import React, { useState } from 'react'
import { createContext } from 'react'

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    return (
        <CounterContext.Provider value={{ count, setCount, name: "abdullah" }}>
            {props.children}
        </CounterContext.Provider>
    )
}
