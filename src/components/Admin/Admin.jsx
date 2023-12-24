import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    //Token verification
    const navigate = useNavigate();
    useEffect(()=>{
      const token = localStorage.getItem('authTokenJWT');
       if(!token){
         navigate('/Register')
       }
  
    },[navigate])

  const [carBrand, setCarBrand] = useState('');
  const [carMileage, setCarMileage] = useState('');
  const [carOwner, setCarOwner] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carMake, setCarMake] = useState('');
  const [carDescription, setCarDescription] = useState('');
  const [carImageData, setCarImageData] = useState([]);
  const [carPrice, setCarPrice] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [category, setCategory] = useState('sports');
  const [isFeatured, setIsFeatured] = useState(false);
  
  const [base64Image, setBase64Image] = useState('');


  async function addProduct(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('carBrand', carBrand);
    formData.append('carMileage', carMileage);
    formData.append('carOwner', carOwner);
    formData.append('carModel', carModel);
    formData.append('carMake', carMake);
    formData.append('carDescription', carDescription);
    formData.append('carImageName', carImageData);
    formData.append('carImageData', base64Image);
    formData.append('carPrice', carPrice);
    formData.append('contactInfo', contactInfo);
    formData.append('category', category);
    formData.append('isFeatured', isFeatured);


   
      if (carImageData) {
        const reader = new FileReader();
  
        reader.onloadend = () => {
          // Set the base64-encoded image data in the state
          setBase64Image(reader.result);
        };
  
        // Read the image file as a data URL (base64)
        reader.readAsDataURL(carImageData);
      }
 
    
    const response = await axios.post('http://localhost:8000/max-garage/api/products', formData,{
            headers:{
              'Content-Type':'multipart/form-data'
                 }
    },
    
    )
    console.log(response);
  }
  return (
    <div style={{paddingTop:'90px', top:'50px'}}>
              <h1 className="titleMain justify-content-center">
                Admin
              </h1>
              <br />
      <form method='POST' className="adminForm" onSubmit={addProduct} encType='multipart/form-data'>
              <div className="cardTitleLarge mx-7 my-5">
                Add Product
              </div>
              <div className="mb-4">
                <label htmlFor="carBrand" className="block text-sm font-medium text-gray-600">Car Brand</label>
                <input  type="text" id="cardBrand" name="cardBrand" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on' onChange={(e)=>setCarBrand(e.target.value)} value={carBrand}/>
              </div>
              <div className="mb-4">
                <label htmlFor="carMake" className="block text-sm font-medium text-gray-600">Make(Altis, etc.,)</label>
                <input  type="text" id="carMake" name="carMake" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on' onChange={(e)=>setCarMake(e.target.value)} value={carMake}/>
              </div>
              <div className="mb-4">
                <label htmlFor="carModel" className="block text-sm font-medium text-gray-600">Model(Year)</label>
                <input  type="number" id="carModel" name="carModel" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on' onChange={(e)=>setCarModel(e.target.value)} value={carModel}/>
              </div>
              <div className="mb-4">
                <label htmlFor="carOwner" className="block text-sm font-medium text-gray-600">Owner Name</label>
                <input  type="text" id="carOwner" name="carOwner" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on' onChange={(e)=>setCarOwner(e.target.value)} value={carOwner}/>
              </div>
              <div className="mb-4">
                <label htmlFor="carMileage" className="block text-sm font-medium text-gray-600">Mileage</label>
                <input  type="text" id="carMileage" name="carMileage" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on' onChange={(e)=>setCarMileage(e.target.value)} value={carMileage}/>
              </div>
              <div className="mb-4">
                <label htmlFor="carPrice" className="block text-sm font-medium text-gray-600">Price</label>
                <input  type="text" id="carPrice" name="carPrice" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on' onChange={(e)=>setCarPrice(e.target.value)} value={carPrice}/>
              </div>
              <div className="mb-4">
                <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-600">Contact</label>
                <input  type="text" id="contactInfo" name="contactInfo" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on' onChange={(e)=>setContactInfo(e.target.value)} value={contactInfo}/>
              </div>
              <div className="mb-4">
                <label htmlFor="carImageData" className="block text-sm font-medium text-gray-600">Car Image </label>
                <input  type="file" id="carImageData" name="carImageData" multiple className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on' onChange={(e)=>setCarImageData(e.target.files[0])} />
              </div>
              <div className="mb-4">
                <label htmlFor="carDescription" className="block text-sm font-medium text-gray-600">Car Description </label>
                <textarea  type="text" style={{resize:"none"}} rows={5} id="carDescription" name="carDescription" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on' onChange={(e)=>setCarDescription(e.target.value)} value={carDescription}/>
              </div>

              <div className="mb-4">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-600">Vehicle Cateogory </label>
                  <select name="category" id="category" value={category} onChange={(e)=>setCategory(e.target.value)} >
                      <option value="sports" >Sports</option>
                      <option value="suv">SUV</option>
                      <option value="trucks">Truck</option>
                      <option value="sedan">Sedan</option>
                      <option value="luxury">Luxury</option>
                  </select>
              </div>

              <div className="mb-4">
                  <label htmlFor="isFeatured" className="block text-sm font-medium text-gray-600">Feature The Product </label>
                  <select name="isFeatured" id="isFeatured" value={isFeatured} onChange={(e)=>setIsFeatured(e.target.value)}>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
                  </select>
              </div>

              {base64Image && (
        <div>
          {/* {/* Display the image using the base64-encoded string */}
          <img src={base64Image} alt="Uploaded Preview" style={{ maxWidth: '100%' }} />
        </div>
      )}
            
              <button type="submit" className="btn-primary" style={{width:'25vw'}}>
                Add Product
              </button>

          </form>
          <br /><br />
    </div>
  )
}

export default Admin
