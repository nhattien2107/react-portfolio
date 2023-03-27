import React from 'react'
import gif from '../assets/IMG_9067.png';
function RightContent() {
  return (
    <div className='right-content-div'>     
      <div className='image-div'>
        <img src={gif} alt="gif" className="img-right"/>
        <i>Your eyes are like the sunset. Beautiful and so hard to look away from.</i>
      </div>

    </div> 
  )
}
export default RightContent