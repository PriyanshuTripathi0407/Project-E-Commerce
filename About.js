import React from 'react'
import Fshirt from './black-red.png'
import Info from './Help'

function About() {
  return (
    <div>
    <div className='about'>
      <h1>About</h1>
      <div style={{ display: 'flex', columnGap: '90px' }}>
        <div style={{ textAlign: 'center', paddingTop: '80px' }}>
          <h2> The standard Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat.</p>
            <button>Read More</button>
        </div>
        <div><img src={Fshirt} alt='' /></div>
      </div>
    </div>
      <Info></Info>
    </div>
  )
}

export default About
