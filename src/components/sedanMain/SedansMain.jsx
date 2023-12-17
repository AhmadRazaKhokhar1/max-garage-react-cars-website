import React, {useEffect} from 'react'

const SedanMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{paddingTop:'90px', top:'50px'}}>
      SedanMain
    </div>
  )
}

export default SedanMain
