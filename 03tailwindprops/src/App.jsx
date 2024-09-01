import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-2 rounded-2xl mb-4'>Tailwind CSS</h1>
      
     <Card username= "abdullah" btnText = "Click me"/>
     <Card username= "kamran" btnText = "Visit me"/>

    </>
  )
}

export default App
