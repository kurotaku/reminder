import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Show from './Show'

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element ={<Show />} />
    </Routes>
  )
}

export default DashboardRoutes
