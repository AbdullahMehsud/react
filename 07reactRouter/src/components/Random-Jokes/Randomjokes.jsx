import React, { useEffect, useState } from 'react'
function Randomjokes() {
    const [data, setData] =useState([])
    useEffect(() => {
        fetch('https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1').then(response => response.json()).then(data => {
            console.log(data);
            setData(data.data.data);
        });
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <h2 className='text-orange-500'>Random Jokes</h2>
        {data.map((joke) => (
                    <div key={joke.id} className='my-4'>
                        <p>Id: {joke.id}</p>
                        <p>Joke: {joke.content}</p>
                    </div>
                ))}
    </div>
  )
}

export default Randomjokes