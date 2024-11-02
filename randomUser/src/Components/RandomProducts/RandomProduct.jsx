import React from 'react'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
function RandomProduct() {
    const randomProduct = 'https://api.freeapi.app/api/v1/public/randomproducts';
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(randomProduct)
                const result = await response.json()
                setProducts(result.data.data)
            } catch (error) {
                console.log("error while fetching product", error);   
            }
        }
        fetchProduct();
    }, [])

    const handleProductClick = (id) => {
        navigate(`/product/${id}`)
    }
  return (
    <>
    <div className='flex flex-wrap justify-center'>
    {products.map((product, index) => {
        const id = `${product.id}`;
        const name = `${product.title}`;
        const thumbnail = `${product.images}`
        return (
            <div className='bg-white w-[300px] m-4 rounded-xl shadow-lg hover:shadow-2xl py-10' key={id}>
            <div className='mx-auto w-40'>
                <img src={thumbnail} alt={name} className='rounded-md'/>
            </div>
            <div className='ml-2'>
                <p>{name}</p>
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={() => handleProductClick(id)} className='bg-blue-400 py-2 px-2 shadow-lg rounded-md hover:bg-blue-600 hover:text-white text-black hover:shadow-xl'>Details</button>
            </div>
        </div>
        )
    })}
    </div>
    </>
  )
}

export default RandomProduct

