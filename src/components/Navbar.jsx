import { Link } from 'react-router-dom'

const logo = '/logo.jpeg'

function Navbar() {

  return (

    <nav className='navbar'>

      <div className='logo-box'>

        <img
          src={logo}
          alt='Elsawy Logo'
        />

        <div>

          <h2>
            الصاوي
          </h2>

          <span>
            لتأجير السيارات
          </span>

        </div>

      </div>

      <div className='nav-links'>

        <Link to='/'>
          الرئيسية
        </Link>

        <Link to='/cars'>
          السيارات
        </Link>

        

        <a
          href='https://wa.me/201143332696'
          target='_blank'
          rel='noreferrer'
          className='whatsapp-btn'
        >
          واتساب
        </a>

      </div>

    </nav>

  )
}

export default Navbar