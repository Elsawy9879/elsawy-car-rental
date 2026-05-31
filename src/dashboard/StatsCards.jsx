function StatsCards() {

  const cars =
    JSON.parse(localStorage.getItem('cars')) || []

  return (

    <div className='stats-grid'>

      <div className='stat-card'>

        <h2>
          {cars.length}
        </h2>

        <p>
          إجمالي السيارات
        </p>

      </div>

      <div className='stat-card'>

        <h2>
          متاح
        </h2>

        <p>
          حالة السيارات
        </p>

      </div>

      <div className='stat-card'>

        <h2>
          واتساب
        </h2>

        <p>
          التواصل المباشر
        </p>

      </div>

    </div>

  )
}

export default StatsCards