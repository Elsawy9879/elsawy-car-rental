import './Dashboard.css'

import Sidebar from './Sidebar'
import StatsCards from './StatsCards'
import CarsTable from './CarsTable'

function Dashboard() {

  return (

    <div className='dashboard'>

      <Sidebar />

      <div className='dashboard-content'>

        <h1>
          لوحة التحكم
        </h1>

        <StatsCards />

        <CarsTable />

      </div>

    </div>

  )
}

export default Dashboard