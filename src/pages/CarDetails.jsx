import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import cars from '../data/cars'

function CarDetails() {

  const { id } = useParams()

  const car = cars.find((item) => item.id == id)

  return (
    <>
      <Navbar />

      <section className='details-page'>

        <img src={car.image} alt={car.name} />

        <div className='details-content'>

          <h1>{car.name}</h1>


          <p>
            سيارة حديثة ومناسبة للسفر والتنقل داخل مصر
          </p>

          <a
            href={`https://wa.me/201000000000?text=عايز%20احجز%20${car.name}`}
            target='_blank'
            rel='noreferrer'
          >
            تواصل واتساب
          </a>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default CarDetails