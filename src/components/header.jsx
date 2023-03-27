import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  return (
    <div className="header-div">
      <div className="header-tab flex-between">
        <span className='header-title'>Chae Noran <i>!</i> </span>
        <span className='header-x-button'><FontAwesomeIcon icon="fa-solid fa-xmark" /></span>
      </div>     
    </div> 
  )
}
export default Header