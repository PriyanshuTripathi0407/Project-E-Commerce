import React from 'react'
import News1 from './news_img1.jpg'
import News2 from './news_img2.jpg'
import News3 from './news_img3.jpg'

function News() {

  const news = [
    { image: News1, title: 'Specimen book. It has survived not only five', date: '7 July 2045', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { image: News2, title: 'Specimen book. It has survived not only five', date: '7 July 2045', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { image: News3, title: 'Specimen book. It has survived not only five', date: '7 July 2045', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }

  ]

  return (
    <div className='news_head'>
      <h1 style={{paddingLeft:'20px'}}>Latest News</h1>
      <div>
        {news.map(i => (
          <div style={{display:'flex'}}>
            <div style={{paddingLeft:'10px'}}>
              <img src={i.image} alt=''></img>
            </div>
            <div className='news'>
              <h1>{i.title}</h1>
              <div style={{display:'flex',columnGap:'400px'}}> 
              <h2>{i.date}</h2>
              <h3> Like {"\t"} Comment </h3>
              </div>
              <p>{i.description}</p>
            </div>

          </div>
        ))}
      </div>


    </div>
  )
}

export default News
