// import React from 'react'

// function LoginRegister() {
//   let signup = document.querySelector(".signup");
//   let login = document.querySelector(".login");
//   let slider = document.querySelector(".slider");
//   let formsection = document.querySelector(".form-section")

//   signup.addEventListener( "click", ()=>{
//     slider.className.add("moveslider");
//     formsection.className.add(".form-section-move");
//   });

//   login.addEventListener( "click", ()=>{
//     slider.classList.remove("moveslider");
//     formsection.classList.remove(".form-section-move");
//   });




//   return (
//     <div className='logReg'>
//       <div className='login_container'>
//         <div className='slider'></div>

//         <div className='btn'>
//           <button className='login'>Login</button>
//           <button className='signup'>Sign Up</button>
//         </div>

//         <div className='form-section'>
//           <div className='loginbox'>
//             <input type='email' placeholder='@gmail.com' className='email ele'></input>
//             <input type='password' placeholder='password' className='password ele'></input>
//             <button className='clkbtn'>Login</button>
//           </div>

//           <div className='signupbox'>
//             <input type='text' placeholder='Enter your Name' className='name ele'></input>
//             <input type='email' placeholder='@gmail.com' className='email ele'></input>
//             <input type='password' className='password ele' placeholder='Password'></input>
//             <input type='password' className='password ele' placeholder='Re-Type Password'></input>
//             <button className='clkbtn'>Sign Up</button>
//           </div>

//         </div>


//         <div></div>
//       </div>
//     </div>
//   )
// }

// export default LoginRegister



import React, { useEffect, useRef } from 'react';

function LoginRegister() {
  const signupRef = useRef(null);
  const loginRef = useRef(null);
  const sliderRef = useRef(null);
  const formsectionRef = useRef(null);

  useEffect(() => {
    const signup = signupRef.current;
    const login = loginRef.current;
    const slider = sliderRef.current;
    const formsection = formsectionRef.current;

    if (signup && login && slider && formsection) {
      signup.addEventListener("click", () => {
        slider.classList.add("moveslider");
        formsection.classList.add("form-section-move");
      });

      login.addEventListener("click", () => {
        slider.classList.remove("moveslider");
        formsection.classList.remove("form-section-move");
      });


      return () => {
        signup.removeEventListener("click", () => { });
        login.removeEventListener("click", () => { });
      };
    }
  }, []);

  return (
    <div className='logReg'>
      <div className='container'>
        <div className='slider' ref={sliderRef}></div>

        <div className='btn'>
          <button className='login' ref={loginRef}>Login</button>
          <button className='signup' ref={signupRef}>Register</button>
        </div>

        <div className='form-section' ref={formsectionRef}>
          <div className='loginbox'>
            <label>Username: </label>
            <input type='email' placeholder='@gmail.com' className='email ele'></input> <br /> <br />
            <label>Password: </label>
            <input type='password' placeholder='password' className='password ele'></input>
            <button className='clkbtn'>Login</button>
          </div>

          <div className='signupbox'>
            <label> First Name : </label>
            <input type='text' placeholder='Enter first Name' className='name ele'></input> <br /> <br />
            <label> Last Name : </label>
            <input type='text' placeholder='Enter last Name' className='name ele'></input> <br /> <br />
            <label> Email : </label>
            <input type='email' placeholder='@gmail.com' className='email ele'></input> <br /> <br />
            <label> Password : </label>
            <input type='password' className='password ele' placeholder='Password'></input> <br /> <br />
            <label> Confirm Password : </label>
            <input type='password' className='password ele' placeholder='Re-Type Password'></input>
            <button className='clkbtn'>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
