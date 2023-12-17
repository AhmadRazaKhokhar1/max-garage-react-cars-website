import React from 'react'

const ShowMore = ({ data, styles}) => {

   console.log(...data)
   
    return (
   <>
   
 { 
   data.map((e)=>{
   return <div className='moreInfo' style={styles} >
       <div className="flex"> <div className="cardTitleLarge">Title</div>{e.title}</div>
       <div className="flex"> <div className="cardTitleLarge">Make</div>{e.make}</div>
       <div className="flex"> <div className="cardTitleLarge">Owner</div>{e.model}</div>
       <div className="flex"> <div className="cardTitleLarge">Mileage</div>{e.mileage}</div>
       <div className="flex"> <div className="cardTitleLarge">Price</div>{e.currency}{e.price}</div>
       <div className="flex"> <div className="cardTitleLarge">Loves</div>{e.likes}</div>
       <div className="flex"> <div className="cardTitleLarge">Title</div>{e.image}</div>
       <div className="flex"> <div className="cardTitleLarge">Title</div>{e.contact}</div>
       <div className="flex"> <div className="cardTitleLarge">Title</div>{e.contact}</div>
       <div className="flex"> <div className="cardTitleLarge">Title</div>{e.contact}</div>
       <div className="flex"> <div className="cardTitleLarge">Title</div>{e.contact}</div>
 
</div>

})
}

</>
  )
}

export default ShowMore
