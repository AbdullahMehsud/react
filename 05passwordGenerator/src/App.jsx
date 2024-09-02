import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [allowNumber, setNumberAllow] = useState(false);
  const [allowChar, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  // useRef hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(allowChar) str+= "0123456789"
    if(allowChar) str+= "!@#$%^&*_-+={}[]~`"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, allowNumber, allowChar, setPassword])


  
  const coppyPasswordToClipBoard = useCallback(()=> {
          passwordRef.current?.select()
          window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  },[length, allowChar, allowNumber, passwordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3
     my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef} />
        <button
        onClick={coppyPasswordToClipBoard}
        className='outline-none bg-blue-700 hover:bg-blue-800 text-white
        px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
      <input 
      type="range" 
      min={6} 
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}} />
      <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox"
       defaultChecked={allowNumber}
       id='numberInput'
       onChange={() => {
        setNumberAllow((prev) => !prev)
       }} />
       <label>Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox"
       defaultChecked={allowChar}
       id='numberInput'
       onChange={() => {
        setCharAllow((prev) => !prev)
       }} />
       <label>Character</label>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
