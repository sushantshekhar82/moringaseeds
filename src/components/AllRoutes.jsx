import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import SingleProduct from '../pages/SingleProduct'
import SingleProductone from '../pages/SingleProduct1'
import SingleProducttwo from '../pages/SingleProduct2'


import Contact from '../pages/Contact'
import About from '../pages/About'
import Products from '../pages/Product'
const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/odc3seeds' element={<SingleProduct/>}/>
          <Route path='/pkmseeds' element={<SingleProductone/>}/>
          <Route path='/bhagyakdmseeds' element={<SingleProducttwo/>}/>
          <Route path='/contactus' element={<Contact/>}/>
          <Route path='/aboutus' element={<About/>}/>
          {/* <Route path='/contact-us' element={<Contact/>}/> */}
          <Route path='/*' element={<Home />} />
          
          
      </Routes>
  )
}

export default AllRoutes