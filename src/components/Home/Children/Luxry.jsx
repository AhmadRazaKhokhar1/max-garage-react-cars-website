import React from 'react'
import LargeProduct from '../../LargeProduct'
import SmallProduct from '../../SmallProduct'
import { Cars } from '../../../TestApi';

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
      See More &rarr;
    </span>
   </div>
    </div>
  )
}

export default Luxry
