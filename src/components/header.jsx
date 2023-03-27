import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
function Header() {
  return (
    <div className="header-div">
      <div className="header-tab flex-between">
        <span className='header-title'>Chae Noran <i>!</i> </span>
        <span className='header-x-button'><FontAwesomeIcon icon="fa-solid fa-xmark" /></span>
      </div>
      <div className="header-close">
      <div className="square">
        <FontAwesomeIcon icon="fa-solid fa-minus" />
      </div>
      <div className="square">
        <FontAwesomeIcon icon={icon({name: 'window-maximize', style: 'regular'})}/>
      </div>
      <div className="square-exit">
        <FontAwesomeIcon icon="fa-solid fa-x" />
      </div>    
      </div>     
    </div> 
  )
}
export default Header