function Filters({ brands, selectedBrand, setSelectedBrand }) {
  return (
    <div className='filters'>

      {brands.map((brand) => (

        <button
          key={brand}
          onClick={() => setSelectedBrand(brand)}
          className={selectedBrand === brand ? 'active' : ''}
        >
          {brand}
        </button>

      ))}

    </div>
  )
}

export default Filters