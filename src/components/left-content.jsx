import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gif from '../assets/IMG_9041.jpg';
function LeftContent() {
  return (
    <div className='left-content-div'>
      <div className='info-div'>
        <h1>Chae Noran <i>!</i></h1>
        <span className='gender-age'>| He / Him |</span> <br/>
        <span className='language-text'>Viet - Eng - Jap - CN <FontAwesomeIcon icon="fa-solid fa-check" /></span><br/>
        <h3 className='break-line-side'> </h3>
      </div>
      <div className='buttons-div'>
        <button className='side-button about'>
          <div className='flex-between'>
            <span>About me <i>!</i></span> 
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </div>
          </button>
        <button className='side-button'>
          <div className='flex-between'>
            <span> My Works <i>!</i></span> 
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </div>        
        </button>
        <h3 className='break-line-side'> </h3>
      </div>
      <div className='image-div'>
        <img src={gif} alt="gif"/>
        <i>Your lips look lonely. Can mine keep them company?</i>
      </div>
    </div> 
  )
}
export default LeftContent