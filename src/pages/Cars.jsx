import { useState } from 'react'
import cars from '../data/cars'
import Navbar from '../components/Navbar'
import Filters from '../components/Filters'
import CarCard from '../components/CarCard'
import Footer from '../components/Footer'

function Cars() {
  const [selectedBrand, setSelectedBrand] = useState('All')

  const brands = ['All', ...new Set(cars.map((car) => car.brand))]

  const filteredCars =
    selectedBrand === 'All'
      ? cars
      : cars.filter((car) => car.brand === selectedBrand)

  return (
    <>
      <Navbar />

      <section className='cars-page'>

        <h1>السيارات المتاحة</h1>

        <Filters
          brands={brands}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />

        <div className='cars-grid'>

          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}

        </div>

      </section>

      <Footer />
    </>
  )
}

export default Cars