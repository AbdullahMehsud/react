import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white
        px-2 py-2 rounded-lg'>
          <button onClick={() => setColor("red")} 
          className='outline-none px-4 py-1 rounded-full bg-red-600 hover:bg-red-700
          text-white shadow-lg'>Red</button>
          <button onClick={() => setColor("green")}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg bg-green-500 hover:bg-green-600'>Green</button>
          <button onClick={() => setColor("yellow")}
           className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg bg-yellow-400 hover:bg-yellow-500'>Yellow</button>
          <button onClick={() => setColor("orange")}
           className='outline-none px-4 py-1 rounded-full
          text-white shadow-xl bg-orange-400 hover:bg-orange-500'>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
