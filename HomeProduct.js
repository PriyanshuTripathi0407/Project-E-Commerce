import React from 'react'
import Shoe1 from './cshoes1.png'
import Shoe3 from './cshoes3.png'
import Shoe5 from './cshoes5.png'
import Shirt3 from './cshirt3.png'
import Product from './Product'

function HomeProduct() {
    const product1 = [
        { id: 'SH1', image: Shoe1, tittle: 'SKY-BLUE SHOE CARDIGAN', price:'30.00' },
        { id: 'SH3', image: Shoe3, tittle: 'WHITE-BLACK SHOE CARDIGAN', price: '$30.00' },
        { id: 'SI4', image: Shirt3, tittle: 'BLUE SHIRT CARDIGAN', price: '$25.00' },
        { id: 'SH10', image: Shoe5, tittle: 'BLACK-WHITE SHOE CARDIGAN', price: '$30.00' }
      ]

      function Demo(){
        <Product/>
      }

  return (
    <div className='' >
        <h1 style={{border:'12px solid white',borderBottomColor:' gold'}}>Featured Product</h1>
        <div style={{ display: 'inline-flex', columnGap: '25px', marginLeft:'120px' }}>
          {
            product1.map(i => (
              <div className='productad' onClick={Demo}>
                <img src={i.image} alt='' />
                <h2> {i.tittle}</h2>
                <h4> ID: {i.id}</h4>
                <h3> Price: {i.price}</h3>
              </div>
            ))
          }
        </div>
      
    </div>
  )
}

export default HomeProduct
