import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import SingleProduct from '../pages/SingleProduct'
import SingleProductone from '../pages/SingleProduct1'
import SingleProducttwo from '../pages/SingleProduct2'
const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/odc3seeds' element={<SingleProduct/>}/>
          <Route path='/pkmseeds' element={<SingleProductone/>}/>
          <Route path='/bhagyakdmseeds' element={<SingleProducttwo/>}/>
      </Routes>
  )
}

export default AllRoutes