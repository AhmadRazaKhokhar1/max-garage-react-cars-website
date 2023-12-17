import React from 'react'

const ShowMore = ({ data, styles}) => {
   
    return (
   <>
   
 { 
   data.map((e)=>{
   return <div className='moreInfo' style={styles} >
       

       <div className="infoImageContainer"> <img src={e.image} alt={e.description} className='infoImage'/></div>
       <div className="flex"> <div className="cardTitleLarge">title</div>{e.title}</div>
       <div className="flex"> <div className="cardTitleLarge">Model</div>{e.model} {e.make}</div>
       <div className="flex"> <div className="cardTitleLarge">Owner</div>{e.owner}</div>
       <div className="flex"> <div className="cardTitleLarge">Mileage</div>{e.mileage}</div>
       <div className="flex"> <div className="cardTitleLarge">Price</div>{e.currency}{e.price}</div>
       <div className="flex"> <div className="cardTitleLarge">Loves</div>{e.likes}</div>
       <div className="flex"> <div className="cardTitleLarge">Phone</div>{e.phone}</div>
       <div className="flex"> <div className="cardTitleLarge">Location</div>{e.location}</div>

</div>

})
}

</>
  )
}

export default ShowMore
