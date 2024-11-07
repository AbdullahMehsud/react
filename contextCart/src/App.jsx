import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'
function App() {
  
  return (
    <>
      <div className='app'>
        <Item name="Mac-Book" price={1000}/>
        <Item name="Iphone" price={10000}/>
        <Cart/>
      </div>    
    </>
  )
}

export default App
