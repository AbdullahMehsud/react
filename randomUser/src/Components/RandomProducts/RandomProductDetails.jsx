import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
function ProductDetails() {
  const dispatch = useDispatch();
  const {productId} = useParams();
  const [product, setProduct] = useState([])
  const url = `https://api.freeapi.app/api/v1/public/randomproducts/${productId}`;
  useEffect(() => {
    const fetchProductDetails = async() => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setProduct(result.data)
      } catch (error) {
        console.log("Error while fetching product details", error);
      }
    }
    fetchProductDetails();
  }, [productId])
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-md overflow-hidden w-full lg:w-3/4">
        <div className="w-full lg:w-1/2 p-6 lg:p-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>
          <p className="text-xl font-semibold text-blue-500 mb-2">${product.price}</p>
          <p className="text-md text-gray-600 mb-4">Brand: {product.brand}</p>
          <p className="text-md text-gray-600 mb-4">Rating: {product.rating}</p>
          <button onClick={(e) => dispatch(addItem({name: product.title, price: product.price}))} className='bg-blue-400 py-2 px-2 shadow-lg rounded-md hover:bg-blue-600 hover:text-white text-black hover:shadow-xl'>Add to Cart</button>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-200">
          <img
            src={product.images}
            alt={product.name}
            className="max-w-full max-h-full object-cover"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails