import { useParams } from 'react-router-dom'
import { useState } from 'react'

function EditCar() {

  const { id } = useParams()

  const cars =
    JSON.parse(localStorage.getItem('cars')) || []

  const currentCar =
    cars.find((car)=>car.id == id)

  const [name,setName] =
    useState(currentCar.name)

  const [brand,setBrand] =
    useState(currentCar.brand)

  const [price,setPrice] =
    useState(currentCar.price)

  const [image,setImage] =
    useState(currentCar.image)

  const updateCar = () => {

    const updatedCars =
      cars.map((car)=>{

        if(car.id == id){

          return {
            ...car,
            name,
            brand,
            price,
            image
          }

        }

        return car
      })

    localStorage.setItem(
      'cars',
      JSON.stringify(updatedCars)
    )

    alert('تم تعديل السيارة')
  }

  return (

    <div className='add-car'>

      <h1>
        تعديل السيارة
      </h1>

      <input
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type='text'
        value={brand}
        onChange={(e)=>setBrand(e.target.value)}
      />

      <input
        type='text'
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
      />

      <input
        type='text'
        value={image}
        onChange={(e)=>setImage(e.target.value)}
      />

      <button onClick={updateCar}>
        حفظ التعديلات
      </button>

    </div>

  )
}

export default EditCar