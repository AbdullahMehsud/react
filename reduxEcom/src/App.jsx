import './App.css'
import Count from './components/count'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  return (
    <>
    <button onClick={(e) => dispatch({ type: "INCREMENT"}) }>Increment</button>
    <Count/>
    <button onClick={(e) => dispatch({ type: "DECREMENT"}) }>Decrement</button>
    </>
  )
}

export default App
