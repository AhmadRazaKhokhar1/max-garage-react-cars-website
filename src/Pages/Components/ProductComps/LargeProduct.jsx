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

  const [styles, setStyles] = useState({display:'none'})

    function showMoreInfo(){
      setStyles({display:'block'});
    }
    function hideMoreInfo(){
      setStyles({display:'none'});
    }

    //
    const [contacts, setContacts] = useState({display:'none'});
const setDisplay = ()=>{
  if( contacts.display === 'none'){
    setContacts({display:'block'})
  }else{
    setContacts({display:'none'})
  }
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
                    Price
                  </span>
                  <span className='infoContainer'>
                     {price}{currency}
                  </span>
                </div>
               
            </div>
            <div className=" cardInfo  ">
            <div className="flex " style={contacts}> <div className="cardTitleLarge">Phone</div><div className="info">{phone}</div></div>
            <button className="btn-primary" onClick={setDisplay}>
              Contact
            </button>

                <button className="seeElse" onFocus={showMoreInfo} onBlur={hideMoreInfo}>See More &nbsp; &rarr;</button>

          <ShowMore
               data={data}
               styles={styles}
               />
            </div>
        
        </div>
          
         
</>
        
  )
}

export default LargeProduct
