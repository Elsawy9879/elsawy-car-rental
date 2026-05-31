import { useState } from 'react'

function AddCar() {

  const [name,setName] = useState('')
  const [brand,setBrand] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState('')

  const saveCar = () => {

    const oldCars =
      JSON.parse(localStorage.getItem('cars')) || []

    const newCar = {
      id:Date.now(),
      name,
      brand,
      price,
      image
    }

    localStorage.setItem(
      'cars',
      JSON.stringify([...oldCars,newCar])
    )

    alert('تم إضافة السيارة')

    setName('')
    setBrand('')
    setPrice('')
    setImage('')
  }

  return (

    <div className='add-car'>

      <h1>
        إضافة سيارة
      </h1>

      <input
        type='text'
        placeholder='اسم السيارة'
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type='text'
        placeholder='الماركة'
        value={brand}
        onChange={(e)=>setBrand(e.target.value)}
      />

      <input
        type='text'
        placeholder='السعر'
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
      />

      <input
        type='text'
        placeholder='رابط الصورة'
        value={image}
        onChange={(e)=>setImage(e.target.value)}
      />

      <button onClick={saveCar}>
        إضافة السيارة
      </button>

    </div>

  )
}

export default AddCar