function CarCard({ car }) {

  if (!car) return null

  return (
    <div className='car-card'>

      <div className='car-image'>
        <img
          src={car.image || '/placeholder.jpg'}
          alt={car.name || 'car'}
        />
      </div>

      <div className='card-content'>

        <h3>{car.name}</h3>

        <span>{car.type}</span>

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
