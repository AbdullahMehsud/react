import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import RandomUser from './Components/RandomUser.jsx'
import ProductDetails from './Components/RandomProducts/RandomProductDetails.jsx';
import RandomProduct from './Components/RandomProducts/RandomProduct.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='random-user' element = {<RandomUser/>}/>
      <Route path='random-product' element = {<RandomProduct/>}/>
      <Route path='/product/:productId' element = {<ProductDetails/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
