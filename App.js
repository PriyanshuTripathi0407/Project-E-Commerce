import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {Link} from 'react-router-dom'
import Header from './Header'
import Home from './Home.js'
import Footer from './Foooter.js'
import Product from './Product.js'
import Fashion from './Fashion.js'
import About from './About.js'
import News from './News.js'
import Contact from './Contact.js'
import Shirt from './ShirtProduct.js';
import ShowProductDetails from './ShowProductDetails.js';
import LoginRegister from './LoginRegister.js';


function App() {
  return (
    <BrowserRouter>  
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/fashion' element={<Fashion />}></Route>
        <Route path='/shirt' element={<Shirt />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/productDetails' element={<ShowProductDetails />}></Route>
        <Route path='/login' element={<LoginRegister />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
