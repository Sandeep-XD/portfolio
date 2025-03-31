import React from 'react'

const Hero = () => {
  return (
    <div className='hero-section flex justify-center' >
        <div className="hero-image">
            <img src="https://i.imgur.com/9Q5QqQD.jpg" alt='thumbnail'/>
        </div>
        <div className="hero-text">
            <h1 className='heading'>Hey! , My name is Sandeep Barman</h1>
            <p className='description'>I am a software developer with a passion for building innovative and user
                friendly applications.</p>
        </div>
        
    </div>
  )
}

export default Hero