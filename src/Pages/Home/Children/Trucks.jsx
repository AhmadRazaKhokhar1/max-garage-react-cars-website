import React from 'react'
import { Cars } from '../../../TestApi.js';
import SmallProduct from '../../Components/ProductComps/SmallProduct'
import { NavLink } from 'react-router-dom';
const Trucks = () => {
  const response = Cars.filter((e)=>(e.category === 'trucks')).splice(0, 3)
  response.length = 3;
  const data = response;

  return (
    <div>
   <br />
   {/* <LargeProduct />*/}
   <div className="flex-main">
    {
      data.map((e, index)=>{
        return <SmallProduct 
        key={index}
        image={e.image}
        title={e.title}
        model={e.model}
        mileage={e.mileage}
        price={e.price}
        currency={e.currency}
        />
      })
    }
      
   </div>
   <div className="seeMore">
    <span className="seeElse">
     <NavLink to='/Trucks' style={{color:'navy'}}> See More &rarr;</NavLink>
    </span>
   </div>
    </div>
  )
}

export default Trucks
