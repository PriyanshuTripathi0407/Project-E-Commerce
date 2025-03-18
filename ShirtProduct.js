import React from 'react'
import Shirt1 from './cshirt1.png'
import Shirt2 from './cshirt2.png'
import Shirt3 from './cshirt3.png'
import Shirt4 from './cshirt4.png'
import Shirt5 from './cshirt5.png'
import { useLocation } from 'react-router-dom'

function ShirtProduct() {
    
    const locate= useLocation()

    const product = [
        { image: Shirt1, title: 'SHOES', price: '$25.00', info: "Excepturi ex, enim adipisci facere nobis asperiores est voluptate.<br/> Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum.Excepturi ex, enim adipisci facere nobis asperiores est voluptate.<br/> Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum.Excepturi ex, enim adipisci facere nobis asperiores est voluptate.<br/> Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum. Excepturi ex, enim adipisci facere nobis asperiores est voluptate.<br/> Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum." },
        { image: Shirt2, title: 'SHIRTS', price: '$25.00', info: "Excepturi ex, enim adipisci facere nobis asperiores est voluptate.Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum.Excepturi ex, enim adipisci facere nobis asperiores est voluptate.Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum.Excepturi ex, enim adipisci facere nobis asperiores est voluptate.Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum. Excepturi ex, enim adipisci facere nobis asperiores est voluptate.Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum." },
        { image: Shirt3, title: 'PANTS & SOCKS', price: '$25.00', info: "Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum.Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum.Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum. Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum." },
        { image: Shirt4, title: 'T-SHIRT & TANKSTOP', price: '$25.00', info: "Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum.Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum.Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum. Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum." },
        { image: Shirt5, title: 'CARDIGANS & JUMPERS', price: '$25.00', info: "Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum.Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum.Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum. Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum." },
        { image: Shirt5, title: 'TOP & HAT', price: '$25.00', info: "Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum.Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum.Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum. Excepturi ex, enim adipisci facere nobis asperiores est voluptate. Saepe odit aperiam blanditiis pariatur ex nemo deserunt voluptatem dicta vel facilis ut, facere rem cum." }
    ]
  
    const data = locate.state
    console.log(data,"****")
    const findData= product.find(i=>i.title.toLowerCase() === data.toLowerCase() ) 
    return (
        <div>
            
                <div className='showproduct'>
                    <div>
                        <img src={findData.image} alt=''/>
                        <h2>{findData.title}</h2>
                    </div>
                    <div>
                        <p>{findData.info}</p>
                        <h2>{findData.price}</h2>
                        <div className='showbutton'> 
                        <button>Add to Cart</button>
                        <button>BUY NOW</button>
                        </div>
                        <div className='showbutton'> 
                        <button>Apply Coupon</button>
                        <button>Next</button>
                        </div>

                    </div>
                </div>
        

        </div>
    )
}

export default ShirtProduct
