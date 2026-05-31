import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'

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

      

    </Routes>
  )
}

export default App
