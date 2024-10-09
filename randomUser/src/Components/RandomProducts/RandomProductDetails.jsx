import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
function ProductDetails() {
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
    <div className='flex w-60 py-10 bg-white shadow-xl'>
      <p>{product.price}</p>
    </div>
    </>
  )
}

export default ProductDetails