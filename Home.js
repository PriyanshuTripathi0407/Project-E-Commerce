import React from 'react'
import './App.css'
import HomeProduct from './HomeProduct'
import Fashion from './Fashion'
import banner from './ban_img.png'
import Shoe from './ishoes.png'
import UnderWear from './iunderwear.png'
import Pent from './ipent.png'
import tshirt from './it_shart.png'
import card from './ijakit.png'
import top from './ihelbet.png'
import News from './News'
import fash from './fashion.jpg'
import yash from './yashvitech.png'
import Subscribe from './Subscribe'
import Help from './Help'
import { useNavigate } from 'react-router-dom'
import { Carousel, Image, Button } from 'antd'

function Home() {

  const product = [
    { image: Shoe, title: 'SHOES' },
    { image: UnderWear, title: 'SHIRTS' },
    { image: Pent, title: 'PANTS & SOCKS' },
    { image: tshirt, title: 'T-SHIRT & TANKSTOP' },
    { image: card, title: 'CARDIGANS & JUMPERS' },
    { image: top, title: 'TOP & HAT' }
  ]
  const nav = useNavigate()

  function send(e) {
    nav('/shirt', { state: e })
  }

  return (
    <div>

      <Carousel className='poster' autoplay>
        <div>
          <div className='poster_div'>
            <div>
              <h1 > Romofyi </h1>
              <h2>Trends 2045 </h2>
              <p>A huge fashion collection forever</p>
              <button>SHOP NOW</button>
            </div>
            <div>
              <img src={banner}></img>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src={fash} style={{width:'1344px'}}></img>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src={yash} style={{width:'1344px'}}></img>
            </div>
          </div>
        </div>
      </Carousel>



      <div>
        <div style={{ display: 'flex' }}>
          {product.map(i => (
            <div className='advertise' onClick={() => send(i.title)} >
              <img src={i.image} alt='' />
              <h2 style={{ color: 'yellow', fontFamily: 'cursive', fontSize: '18px' }}>{i.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <HomeProduct />
      <Fashion />
      <News />
      <Subscribe />
      <Help />
    </div>
  )
}

export default Home
