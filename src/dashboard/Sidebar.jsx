import { Link } from 'react-router-dom'

function Sidebar() {

  return (

    <aside className='sidebar'>

      <div className='sidebar-top'>

        <img
          src='/logo.jpeg'
          alt='logo'
          className='sidebar-logo'
        />

        <h2>الصاوي</h2>

        <span>Dashboard</span>

      </div>

      <div className='sidebar-links'>

        <Link to='/dashboard'>
          الرئيسية
        </Link>

        <Link to='/dashboard/add-car'>
          إضافة سيارة
        </Link>

        <Link to='/dashboard/cars'>
          إدارة السيارات
        </Link>

        <Link to='/cars'>
          عرض السيارات
        </Link>

        <Link to='/'>
          الموقع الرئيسي
        </Link>

      </div>

    </aside>

  )
}

export default Sidebar