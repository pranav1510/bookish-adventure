import React from "react";
import './IconComp.css';

const IconComp = () => {
    return(
        <div className='icons'>
        <div className='innerIcon border-right'>
          <img src={'/icons/AI.png'} alt="AI"/>
          <div>
            <h5>100K+</h5>
            <span>AI model submissions</span>
          </div>
        </div>
        <div className='innerIcon border-right'>
          <img src={'/icons/dataSci.png'} alt="dataSci"/>
          <div>
            <h5>50K+</h5>
            <span>Data Scientists</span>
          </div>
        </div>
        <div className='innerIcon'>
          <img src={'/icons/hosted.png'} alt="hosted"/>
          <div>
            <h5>100+</h5>
            <span>AI Challenges hosted</span>
          </div>
        </div>
      </div>
    )
}

export default IconComp