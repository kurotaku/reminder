import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Customer from './pages/Customer';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/:store_ulid" element={<Dashboard />} />
        <Route exact path="/:store_ulid/customers/*" element={<Customer />} />
      </Routes>
    </Router>
  )
}
export default App
