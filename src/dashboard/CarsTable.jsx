import { Link } from 'react-router-dom'

function CarsTable() {

  const cars =
    JSON.parse(localStorage.getItem('cars')) || []

  const deleteCar = (id) => {

    const filtered =
      cars.filter((car)=>car.id !== id)

    localStorage.setItem(
      'cars',
      JSON.stringify(filtered)
    )

    window.location.reload()
  }

  return (

    <div className='cars-table'>

      <h2>
        السيارات
      </h2>

      <table>

        <thead>

          <tr>

            <th>الصورة</th>

            <th>الاسم</th>

            <th>الماركة</th>

            <th>السعر</th>

            <th>تعديل</th>

            <th>حذف</th>

          </tr>

        </thead>

        <tbody>

          {cars.map((car)=>(

            <tr key={car.id}>

              <td>
                <img src={car.image} alt='' />
              </td>

              <td>
                {car.name}
              </td>

              <td>
                {car.brand}
              </td>

              <td>
                {car.price}
              </td>

              <td>

                <Link
                  to={`/dashboard/edit-car/${car.id}`}
                  className='edit-btn'
                >
                  تعديل
                </Link>

              </td>

              <td>

                <button
                  onClick={()=>deleteCar(car.id)}
                >
                  حذف
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}

export default CarsTable