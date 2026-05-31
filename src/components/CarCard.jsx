import { Link } from 'react-router-dom'

function CarCard({ car }) {

  return (

    <div className='car-card'>

      <div className='car-image'>

        <img
          src={car.image}
          alt={car.name}
        />

      </div>

      <div className='card-content'>

        <h3>
          {car.name}
        </h3>


        <span>
          {car.type}
        </span>

        <div className='card-buttons'>

          <Link to={`/car/${car.id}`}>
            التفاصيل
          </Link>

          <a
          href='https://wa.me/201143332696'
            target='_blank'
            rel='noreferrer'
            className='card-whatsapp'
          >
            واتساب
          </a>

        </div>

      </div>

    </div>

  )
}

export default CarCard
