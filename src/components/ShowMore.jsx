import React from 'react'

const ShowMore = ({ data, styles}) => {
   
    return (
   <>
   
 { 
   data.map((e)=>{
   return <div className='moreInfo' style={styles} >
       

        <div className="infoBody">
            <div className="flex"> <div className="cardTitleLarge">Brand</div><div className="info">{e.title}</div></div>
            <div className="flex"> <div className="cardTitleLarge">Model</div><div className="info">{e.model} {e.make}</div></div>
            <div className="flex"> <div className="cardTitleLarge">Owner</div><div className="info">{e.owner}</div></div>
            <div className="flex"> <div className="cardTitleLarge">Mileage</div><div className="info">{e.mileage}</div></div>
            <div className="flex"> <div className="cardTitleLarge">Price</div><div className="info">{e.currency}{e.price}</div></div>
            <div className="flex"> <div className="cardTitleLarge">Likes</div><div className="info">{e.likes}</div></div>
            <div className="flex"> <div className="cardTitleLarge">Location</div><div className="info">{e.location}</div></div>
            <div className="flex"> <div className="cardTitleLarge">ID:</div><div className="info">{e.id}</div></div>
            <div> <div className="cardTitleLarge">Description:</div><div className="info">{e.description}</div></div>

           
        </div>
      </div>

})
}

</>
  )
}

export default ShowMore
