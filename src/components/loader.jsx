import React from 'react'


const Loader = () => {
  return (
    <div id="loader" className="loader">
        <div className="dots">
            <span id="dot--1"></span>
            <span id="dot--2"></span>
            <span id="dot--3"></span>
        </div>
        <div className="loader__overlay"></div>
    </div>  
  )
}

export default Loader
