import React, { useState } from 'react'
import ShowMore from './ShowMore'

const LargeProduct = ({title, description,id, price, location, isFeatured, owner, make, model, likes, currency, phone, image, mileage}) => {
  const data =[];

  const passData = () => {
    const newData = {
      title,
      description,
      id,
      price,
      location,
      isFeatured,
      owner,
      make,
      model,
      likes,
      currency,
      phone,
      image,
      mileage,
    };

    data.push(newData)
  };
  passData()

  const [styles, setStyles] = useState({display:'block'})

    function showMoreInfo(){
      setStyles({display:'block'});
    }
    function hideMoreInfo(){
      setStyles({display:'none'});
    }
    return (
    <>
        <div className='largeCard' id={id}>
            <div className="largeCardImagContainer">
                <img src={image} alt={title} className="largeCardImage" />
            </div>

            <div className="largeCardBody">
            
                <div className="largeCardInfo flex">
                  <span className='cardTitleLarge'>
                      Brand 
                  </span>
                  <span className='infoContainer'>
                    {title}
                  </span>
                </div>
                <div className="largeCardInfo flex">
                  <span className='cardTitleLarge'>
                      Model
                  </span>
                  <span className='infoContainer'>
                      {model} {make}
                  </span>
                </div>
                <div className="largeCardInfo flex">
                  <span className='cardTitleLarge'>
                   Mileage
                  </span>
                  <span className='infoContainer'>
                   {mileage}
                  </span>
                </div>
                <div className="largeCardInfo flex">
                  <span className='cardTitleLarge'>
                    Owner
                  </span>
                  <span className='infoContainer'>
                     {owner}
                  </span>
                </div>
               
            </div>
            <div className="flex cardInfo py-1 px-5">
                <button className='btn-primary'>Contact</button>
                <button className="seeElse" onClick={showMoreInfo} onBlur={hideMoreInfo}>See More &nbsp; &rarr;</button>
            </div>
        
        </div>
          
         

          <ShowMore
               data={data}
               styles={styles}
               />
</>
        
  )
}

export default LargeProduct
