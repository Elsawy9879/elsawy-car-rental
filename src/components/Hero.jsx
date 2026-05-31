function Hero() {

  return (

    <section className='hero'>

      <div className='hero-overlay'>

        <div className='hero-content'>

          <img
            src='/logo.jpeg'
            alt='Elsawy Logo'
            className='hero-logo'
          />

          <span className='hero-badge'>
            Luxury Car Rental In Egypt
          </span>

          <h1>
            ELSAWY
          </h1>

          <h2>
            CAR RENTAL
          </h2>

          <p>
            أفضل خدمات تأجير السيارات الفاخرة
            في مصر بأسعار تنافسية وخدمة VIP
          </p>

          <div className='hero-buttons'>

            <Link to='/cars'>
          استكشف الاسطول
        </Link>


            <a
          href='https://wa.me/201143332696'
              target='_blank'
              rel='noreferrer'
              className='hero-whatsapp'
            >
              واتساب مباشر
            </a>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Hero
