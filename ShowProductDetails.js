import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import Shoe1 from './cshoes1.png'
import Shoe2 from './cshoes2.png'
import Shoe3 from './cshoes3.png'
import Shoe4 from './cshoes4.png'
import Shoe5 from './cshoes5.png'
import Shirt1 from './cshirt1.png'
import Shirt2 from './cshirt2.png'
import Shirt3 from './cshirt3.png'
import Shirt4 from './cshirt4.png'
import Shirt5 from './cshirt5.png'

function ShowProductDetails() {
  const navigate = useNavigate()
  const locate = useLocation()
  const product = [
    { id: 'SH1', image: Shoe1, tittle: 'SKY-BLUE SHOE CARDIGAN', price: '$30.00', type: 'Shoe', },
    { id: 'SI2', image: Shirt2, tittle: 'PURPLE SHIRT CARDIGAN', price: '$25.00', type: 'Shirt', },
    { id: 'SH3', image: Shoe3, tittle: 'WHITE-BLACK SHOE CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SI4', image: Shirt3, tittle: 'BLUE SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SH5', image: Shoe5, tittle: 'BLACK-WHITE SHOE CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SH6', image: Shoe3, tittle: 'WHITE-BLACK SHOE CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SH7', image: Shoe1, tittle: 'SKY-BLUE SHOE CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SH8', image: Shoe4, tittle: 'SHORT BOOT CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SH9', image: Shoe5, tittle: 'BLACK-WHITE SHOE CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SH10', image: Shoe5, tittle: 'BLACK-WHITE SHOE CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SI1', image: Shirt1, tittle: 'GREEN SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SH2', image: Shoe2, tittle: 'BLACK-WHITE SHOE CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SI3', image: Shirt5, tittle: 'WHITE SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SH4', image: Shoe4, tittle: 'SHORT BOOT CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SI5', image: Shirt1, tittle: 'GREEN SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SI6', image: Shirt4, tittle: 'RED SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SI7', image: Shirt4, tittle: 'RED SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SI8', image: Shirt5, tittle: 'WHITE SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SI9', image: Shirt4, tittle: 'RED SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SI10', image: Shirt4, tittle: 'RED SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SH1', image: Shoe1, tittle: 'SKY-BLUE SHOE CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SI2', image: Shirt2, tittle: 'PURPLE SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SH3', image: Shoe3, tittle: 'WHITE-BLACK SHOE CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SI4', image: Shirt3, tittle: 'BLUE SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SH5', image: Shoe5, tittle: 'BLACK-WHITE SHOE CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SI6', image: Shirt4, tittle: 'RED SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SH7', image: Shoe1, tittle: 'SKY-BLUE SHOE CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SI8', image: Shirt5, tittle: 'WHITE SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SH9', image: Shoe5, tittle: 'BLACK-WHITE SHOE CARDIGAN', price: '$30.00', type: '' },
    { id: 'SH10', image: Shoe5, tittle: 'BLACK-WHITE SHOE CARDIGAN', price: '$30.00', type: '' },
    { id: 'SI1', image: Shirt1, tittle: 'GREEN SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SI2', image: Shirt2, tittle: 'PURPLE SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SI  3', image: Shirt5, tittle: 'WHITE SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SI4', image: Shirt3, tittle: 'BLUE SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SI5', image: Shirt1, tittle: 'GREEN SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SH6', image: Shoe3, tittle: 'WHITE-BLACK SHOE CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SI7', image: Shirt4, tittle: 'RED SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SH8', image: Shoe4, tittle: 'SHORT BOOT CARDIGAN', price: '$30.00', type: 'Shoe' },
    { id: 'SI9', image: Shirt4, tittle: 'RED SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' },
    { id: 'SI10', image: Shirt4, tittle: 'RED SHIRT CARDIGAN', price: '$25.00', type: 'Shirt' }
  ]

  const findProduct = product.find(i => (i.id === locate.state.id))
  const filterProduct = product.filter(i => (i.type.toLowerCase().includes(locate.state.type.toLowerCase())))

  function send(e){
    navigate('/product',{state:e})
    console.log(e)
  }

  return (
    <div>
      <div className='showproduct'>
        <div>
          <img src={findProduct.image}></img>
        </div>
        <div style={{ textAlign: 'left' }}>
          <p> <b> ID: </b> {findProduct.id}</p>
          <p> <b> Product: </b> {findProduct.tittle}</p>
          <p> <b> Price: </b>{findProduct.price}</p>
          <p> <b> Details: </b>This is Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Reiciendis dolore similique officia corporis veniam modi rerum iste.<br /> Dolorum ut provident est rem qui quibusdam, neque unde,id iure <br /> laboriosam quo tempore asperiores ad libero sed voluptatum,nesciunt quae <br /> modi impedit. Est, aut iusto error amet assumenda inventore! <br/> 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Reiciendis dolore similique officia corporis veniam modi rerum iste.<br /> Dolorum ut provident est rem qui quibusdam, neque unde,id iure <br /> laboriosam quo tempore asperiores ad libero sed voluptatum,nesciunt quae </p>
          <div style={{ display: 'flex', columnGap: '20px' }}>
            <div>
              <button>ADD TO CART</button>
              <button>BUY NOW</button>
            </div>
            <div>
              <button>Apply COUPON</button>
              <button>NEXT</button>
            </div>

          </div>

        </div>
      </div>


      <div className='product'>
        <h1 style={{ textAlign: 'left' }}>Recommended Products </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '70px', columnGap: '60px', rowGap: '35px' }} >
          {
            filterProduct.map(i => (
              <div className='productad' onClick={()=>send(i)}>
                <img src={i.image} alt='' />
                <h2> {i.tittle}</h2>
                <h4> ID: {i.id}</h4>
                <h3> Price: {i.price}</h3>
                <button>View Details</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ShowProductDetails
