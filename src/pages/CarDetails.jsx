function CarDetails() {

  const { id } = useParams()

  const car = cars.find((item) => item.id == id)

  if (!car) {
    return (
      <>
        <Navbar />
        <div style={{ color: "white", padding: "100px" }}>
          Car Not Found
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <section className='details-page'>
        <img src={car.image} alt={car.name} />

        <div className='details-content'>
          <h1>{car.name}</h1>

          <p>سيارة حديثة ومناسبة للسفر والتنقل داخل مصر</p>

          <a
            href={`https://wa.me/201143332696?text=عايز%20احجز%20${car.name}`}
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
