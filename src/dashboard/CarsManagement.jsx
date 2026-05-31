import Sidebar from './Sidebar'
import CarsTable from './CarsTable'

function CarsManagement() {

  return (

    <div className='dashboard'>

      <Sidebar />

      <div className='dashboard-content'>

        <h1>
          إدارة السيارات
        </h1>

        <CarsTable />

      </div>

    </div>

  )
}

export default CarsManagement