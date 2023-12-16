import React from 'react'

const SmallProduct = (props) => {
  return (
 
    <div>

       <div className="cardSmall">
        <div className="topImage">
          <img src={props.image} alt="camary_toyota_car" className="imgCardSmall" />
        </div>
     

        <div className="card-body">

          <div className="flex inner-body">
          <h2 className="cardSmallTitle">{props.title}</h2> 
          </div>

          <div className="flex inner-body">
          <span className="cardSmallTitleSmall"><b>MODEL</b></span>
            <span className="cardSmallCarInfo">{props.model}</span>
            
          </div>

          <div className="flex inner-body">
          <span className="cardSmallTitleSmall"><b>Mileage</b></span>
          <span className="cardSmallCarInfo">{props.mileage}</span>
          </div>

          <div className="flex inner-body">
            <b>Price</b>
          <span className="cardSmallCarInfo">{props.currency}&nbsp;{props.price}</span>

          </div>

          <div>
          <span className="cardSmallCarMileage"><button className='btn-primary'><b>Contact</b></button> </span>
          </div>

        </div>
        </div>


    </div>
    
  )
}

export default SmallProduct

