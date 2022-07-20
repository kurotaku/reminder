import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import CustomerRoutes from './pages/customers/CustomerRoutes'
import DashboardRoutes from './pages/dashboard/DashboardRoutes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route exact path="/:store_ulid/" element={<DashboardRoutes />} />
        <Route exact path="/:store_ulid/customers/*" element ={<CustomerRoutes />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
