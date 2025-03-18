import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'
import fb from './fb.png'
import twitter from './twitter.png'
import linkedin from './in.png'
import insta from './insta.png'
import email from './email.png'
import romo from './logo.png'
import bag from './shoppingbag.png'
import search from './search.png'
import LoginRegister from './LoginRegister'

function Header() {
    const nav= useNavigate();
    function send(e){
       nav('/login');
    }
    return (
        <div style={{ width: '100%' }}>
            <div className='head1'>
                <div>
                    <p>📞 Call us: +91 01234 56789</p>
                </div>
                <div>
                    <ul >
                        <li><img src={fb} alt=''></img></li>
                        <li><img src={twitter} alt=''></img></li>
                        <li><img src={linkedin} alt=''></img></li>
                        <li><img src={insta} alt=''></img></li>
                    </ul>
                </div>
                <div>
                    <select>
                        <option value='-Choose Your Language-'>Choose Your Language</option>
                        <option value='English'> English</option>
                        <option value='Hindi'>Hindi</option>
                        <option value='Sanskrit'>Sanskrit</option>
                        <option value='Chhattisgarhi'>Chhattisgarhi</option>
                    </select>
                </div>
                <div>
                <button onClick={send}>Login</button>
                </div>  
                <div>
                <button onClick={send}>Register</button>
                </div>
                
            </div>

            <div className='head2'>
                <div style={{ paddingTop: '20px' }}>
                    <img src={email} alt=''></img>
                    <span style={{ fontSize: '18px' }}>mail@domain.com</span>
                </div>
                <div>
                    <Link to='/' > <img src={romo} alt=''></img> </Link>
                </div>
                <div style={{ paddingTop: '10px' }}>
                    <img src={bag} alt=''></img>
                    <span style={{ marginLeft: '25px' }}> <button>Order Now</button> </span>
                </div>
            </div>
            <div className='head3'>
                <div>
                    <ul>
                        <Link to='/' > <li>HOME</li>  </Link>
                        <Link to='/about'> <li>ABOUT</li>  </Link>
                        <Link to='/product' > <li>PRODUCTS</li>  </Link>
                        <Link to='/fashion' > <li>FASHION</li>  </Link>
                        <Link to='/news' > <li>NEWS</li>  </Link>
                        <Link to='/contact' > <li>CONTACT</li>  </Link>
                        <Link to='/login' > <li>LOGIN</li>  </Link>
                    </ul>
                </div>
                <div className='inp'>
                <input type='text' placeholder='Search here...' ></input> 
                <img src={search} alt=''></img>
                </div>
            </div>

        </div>
    )
}

export default Header
