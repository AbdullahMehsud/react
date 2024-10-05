import React from 'react'
import logo from '../assets/logo.svg'
function Logo({width = '100px', height= 'auto'}) {
  return (
    <div>
      <img src={logo} alt=""  style={{ width: width, height: height }} />
    </div>
  )
}

export default Logo