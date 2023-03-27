import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  return (
    <div className="navbar-div flex-between">
      <div className="navbar-buttons">
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        <FontAwesomeIcon icon="fa-solid fa-rotate-right" />
      </div>
      <div className="address-bar">
        <input className='address-bar-input' type="text" value="https://fb.com/ChaeNoran" disabled/>
        <FontAwesomeIcon icon="fa-solid fa-star" className="bookmark-button"/>
      </div>
    </div> 
  )
}
export default Navbar