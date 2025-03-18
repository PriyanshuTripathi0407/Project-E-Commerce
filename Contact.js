import React from 'react'
import Banner from './ban_img.png'

function Contact() {
  return (
    <div style={{display:'flex',columnGap:'20px'}}>
  <div class="form">
      <form >
        <h2 class="title"> Contact form </h2>
        <label style={{ marginLeft: '1px'}}>Firstname:  </label> <br/>
        <input class="input" type="text" placeholder="Firstname"  required/> <br/> <br/>

        <label style={{ marginLeft: ''}}>Lastname:  </label> <br/>
        <input class="input" type="text" placeholder="Lastname"  required/> <br/> <br/>

        <label style={{ marginLeft: ''}}>Email: </label> <br/>
        <input class="input" type="email" placeholder="Email"  required/> <br/> <br/>
        
        <label style={{ marginLeft: ''}}>Contact Number: </label> <br/>
        <input class="input" type="email" placeholder="Email"  required/> <br/> <br/>

        <label >Message: </label> <br/>
        <input class="input" type='text' placeholder="write your message here" required style={{ height:'100px', width:'350px'}}/> <br/> <br/>
        
        <button class="submit">Submit</button>
        
      </form>
</div>
<div className='adv'>
  <div>
    <h1>Romofyi</h1>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis dolore similique officia corporis veniam modi rerum iste. Dolorum ut provident est rem qui quibusdam, neque unde, id iure laboriosam quo tempore asperiores ad libero sed voluptatum, nesciunt quae modi impedit. Est, aut iusto error amet assumenda inventore! Nam possimus pariatur quaerat sit, ea doloremque placeat magnam at adipisci sint aliquid, facilis sapiente dolorum? Neque placeat consequuntur harum quam adipisci debitis. Inventore reprehenderit error maxime. </p>
  </div>
  <div>
    <img src={Banner} alt=''></img>
  </div>
</div>

    </div>
  )
}

export default Contact



