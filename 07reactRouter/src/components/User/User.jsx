import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-700 text-white px-3 py-3'>User : {userid}</div>
  )
}

export default User