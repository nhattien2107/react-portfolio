import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className="footer-div">
      <h3 className='break-line'> </h3>
      <div className='footer-social-bar'>
      <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
      <FontAwesomeIcon icon="fa-brands fa-instagram" />
      <FontAwesomeIcon icon="fa-brands fa-youtube" />
      <FontAwesomeIcon icon="fa-solid fa-envelope" />
      </div>
    </div> 
  )
}
export default Footer