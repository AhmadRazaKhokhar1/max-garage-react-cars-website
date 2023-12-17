import React, {useEffect} from 'react'

const TrucksMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{paddingTop:'90px', top:'50px'}}>
      TrucksMain
    </div>
  )
}

export default TrucksMain
