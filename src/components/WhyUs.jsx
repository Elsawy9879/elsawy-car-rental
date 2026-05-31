import { FaCarSide, FaClock, FaShieldAlt } from 'react-icons/fa'

function WhyUs() {
  return (
    
    <section className='why-us'>

      <div className='why-card'>
        <FaCarSide />
        <h3>سيارات حديثة</h3>
      </div>

      <div className='why-card'>
        <FaClock />
        <h3>خدمة سريعة</h3>
      </div>

      <div className='why-card'>
        <FaShieldAlt />
        <h3>أمان وثقة</h3>
      </div>

    </section>
  )
}

export default WhyUs