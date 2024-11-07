import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { store } from './redux/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import RandomUser from './Components/RandomUser.jsx'
import ProductDetails from './Components/RandomProducts/RandomProductDetails.jsx';
import RandomProduct from './Components/RandomProducts/RandomProduct.jsx';
import TodoList from './Components/TodoList/TodoList.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='random-user' element = {<RandomUser/>}/>
      <Route path='random-product' element = {<RandomProduct/>}/>
      <Route path='/product/:productId' element = {<ProductDetails/>}/>
      <Route path='todo-list' element ={<TodoList/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router ={router}/>
    </Provider>
  </StrictMode>,
)
