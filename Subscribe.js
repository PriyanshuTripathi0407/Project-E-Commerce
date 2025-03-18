import React from 'react'

function Subscribe() {
  return (
    <div className='subscribe'>
        <div style={{display:'flex', columnGap:'250px'}}>
            <h1>Subscribe to the Newsletter</h1>
            <div>
            <input value="Enter your email" />  <br/>
            <button>Subscribe</button>
            </div>
        </div>
      
    </div>
  )
}

export default Subscribe
