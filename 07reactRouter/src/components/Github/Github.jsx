import React, {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/abdullahmehsud').then(response => response.json())
  //   .then(data => {console.log(data);
  //     setData(data)
  //   })
  // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <h2 className='text-orange-500'>Github</h2>
      <p>Name: {data.name} </p> <p>Followers: {data.followers} </p>
    <img className='mt-3' src={data.avatar_url} alt="Git Picture"  width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
  const response = await fetch('https://api.github.com/users/abdullahmehsud')
  return response.json()
}