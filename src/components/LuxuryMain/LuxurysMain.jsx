import React, {useEffect, useState} from 'react'
import LargeProduct from '../LargeProduct';
import { Cars } from '../../TestApi';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

const LuxuryMain = () => {
  const [loaded, setLoaded] = useState(true);

   //Token verification
   const navigate = useNavigate();
   useEffect(()=>{
     const token = localStorage.getItem('authTokenJWT');
      if(!token){
        navigate('/Register')
      }
  setLoaded(false)
   },[navigate])

// just in case if the page is scrolled down by default
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

// api 
const response = Cars.filter((e)=>e.category === 'luxury')

const id = Math.floor(Math.random()*55213567)

  return (
    <>
   
    {
      loaded?<Loader/>:(

    
    <div style={{paddingTop:'90px', top:'50px'}}>
       <h1 className="titleMain">
              Luxry Cars
      </h1>
      <hr />
      <div style={{
        display:'flex',
        flexWrap:'wrap', 
        flexGrow:'revert', 
        width:'95vw', 
        justifyContent:'space-between',
        margin:'auto',
        alignItems:'center'
      }}
      >

    {
      response.map((e, index)=>{
        return  <LargeProduct
                key={index}
                title={e.title}
                make={e.make}
                owner={e.owner}
                phone={e.phone}
                price={e.price}
                description={e.description}
                model={e.model}
                currency={e.currency}
                likes={e.likes}
                image={e.image}
                location={e.location}
                mileage={e.mileage}
                isFeatured={e.isFeatured}
                id={id}
                />
       
      })
    }
        </div>
        <br />
    </div>
      ) }
     </>
  )
}

export default LuxuryMain
