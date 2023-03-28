import React from 'react'
import gif from '../assets/giphy.gif';
import img from '../assets/Smithereens.png';

function RightContent() {
  return (
    <div className='right-content-div'>     
      <div className='image-div'>
        <img src={gif} alt="gif" className="img-right"/>              
        <h3 className='break-line-side'> </h3>     
      </div>
      <div className='image-div'>
        <a href="https://open.spotify.com/album/2hEnymoejldpuxSdTnkard">
          <img src={img} alt="img" className="smithereen-img"/>      
        </a>
        <h2>SMITHEREENS</h2>    
        <span>Joji</span>     
      </div>
    </div> 
  )
}
export default RightContent