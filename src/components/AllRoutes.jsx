import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import SingleProduct from '../pages/SingleProduct'
const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/odc' element={<SingleProduct/>}/>
      </Routes>
  )
}

export default AllRoutes