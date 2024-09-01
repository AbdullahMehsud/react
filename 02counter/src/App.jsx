import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(0)

const addValue = () => {
  if(counter < 20) {
    setCounter(counter + 1)
  }else {
    alert("counter is full")
  }
  console.log(counter);
}

const removeValue = () => {
  if (counter > 0) {
    setCounter(counter - 1)
  }else{
    alert("counter is 0 you can't remove value")
  }
  console.log(counter);
  
}
  return (
    <>
    <h1>Chai aur React</h1>
      <h2>Counter Value:  {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
