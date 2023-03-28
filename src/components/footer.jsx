import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className="footer-div">
      <h3 className='break-line'> </h3>
      <div className='footer-social-bar'>
        <a href="https://www.fb.com/ChaeNoran">
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
        </a> 
        <a href="https://www.instagram.com/maybe.nt_/">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </a>
        <a href="https://www.youtube.com/@ChaeNoran">
          <FontAwesomeIcon icon="fa-brands fa-youtube" />
        </a>
        <a href="https://www.youtube.com/@ChaeNoran">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </a>
      </div>
    </div> 
  )
}
export default Footer