import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'

import Dashboard from './dashboard/Dashboard'
import AddCar from './dashboard/AddCar'
import EditCar from './dashboard/EditCar'
import CarsManagement from './dashboard/CarsManagement'

import './App.css'

function App() {
  return (
    <Routes>

      {/* Website */}

      <Route
        path='/'
        element={<Home />}
      />

      <Route
        path='/cars'
        element={<Cars />}
      />

      <Route
        path='/car/:id'
        element={<CarDetails />}
      />

      {/* Dashboard */}

      <Route
        path='/dashboard'
        element={<Dashboard />}
      />

      <Route
        path='/dashboard/add-car'
        element={<AddCar />}
      />

      <Route
        path='/dashboard/edit-car/:id'
        element={<EditCar />}
      />

      <Route
        path='/dashboard/cars'
        element={<CarsManagement />}
      />

    </Routes>
  )
}

export default App