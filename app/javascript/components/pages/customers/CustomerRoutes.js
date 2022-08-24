import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import New from './New'
import Index from './Index'
import Show from './Show'

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element ={<Index />} />
      <Route exact path="/new" element ={<New />} />
      <Route exact path="/:id" element ={<Show />} />
    </Routes>
  )
}

export default CustomerRoutes
