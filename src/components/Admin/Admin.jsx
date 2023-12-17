import React from 'react'

const Admin = () => {
  return (
    <div style={{paddingTop:'90px', top:'50px'}}>
              <h1 className="titleMain justify-content-center">
                Admin
              </h1>
              <br />
      <form method='POST' className="adminForm">
              <div className="cardTitleLarge mx-7 my-5">
                Add Product
              </div>
              <div className="mb-4">
                <label htmlFor="carBrand" className="block text-sm font-medium text-gray-600">Car Brand</label>
                <input required type="text" id="cardBrand" name="cardBrand" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on'/>
              </div>
              <div className="mb-4">
                <label htmlFor="carMake" className="block text-sm font-medium text-gray-600">Make(Altis, etc.,)</label>
                <input required type="text" id="carMake" name="carMake" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on'/>
              </div>
              <div className="mb-4">
                <label htmlFor="carModel" className="block text-sm font-medium text-gray-600">Model(Year)</label>
                <input required type="text" id="carModel" name="carModel" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on'/>
              </div>
              <div className="mb-4">
                <label htmlFor="carOwner" className="block text-sm font-medium text-gray-600">Owner Name</label>
                <input required type="text" id="carOwner" name="carOwner" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on'/>
              </div>
              <div className="mb-4">
                <label htmlFor="carMileage" className="block text-sm font-medium text-gray-600">Mileage</label>
                <input required type="text" id="carMileage" name="carMileage" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on'/>
              </div>
              <div className="mb-4">
                <label htmlFor="carPrice" className="block text-sm font-medium text-gray-600">Price</label>
                <input required type="text" id="carPrice" name="carPrice" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on'/>
              </div>
              <div className="mb-4">
                <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-600">Contact</label>
                <input required type="text" id="name" name="contactInfo" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on'/>
              </div>
              <div className="mb-4">
                <label htmlFor="carImage" className="block text-sm font-medium text-gray-600">Car Image </label>
                <input required type="file" id="carImage" name="carImage" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on'/>
              </div>
              <div className="mb-4">
                <label htmlFor="carDescription" className="block text-sm font-medium text-gray-600">Car Image </label>
                <textarea required type="text" style={{resize:"none"}} rows={5} id="carDescription" name="carDescription" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on'/>
              </div>

              
            
              <button type="submit" className="btn-primary" style={{width:'25vw'}}>
                Add Product
              </button>

          </form>
          <br /><br />
    </div>
  )
}

export default Admin
