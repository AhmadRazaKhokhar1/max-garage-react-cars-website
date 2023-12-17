import React from 'react'
import SmallProduct from '../../SmallProduct'
import { Cars } from '../../../TestApi';
import { NavLink } from 'react-router-dom';

const Luxry = () => {
  const response = Cars.filter((e)=>(e.category === 'luxury')).splice(0, 3)
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
     <NavLink to='/luxury' style={{color:'navy'}}> See More &rarr;</NavLink>
    </span>
   </div>
    </div>
  )
}

export default Luxry
