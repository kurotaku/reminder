import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import New from './New'
import Index from './Index'

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element ={<Index />} />
      <Route exact path="/new" element ={<New />} />
    </Routes>
  )
}

export default CustomerRoutes
