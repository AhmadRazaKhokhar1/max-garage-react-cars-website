import React, {useEffect} from 'react'

const SuvMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{paddingTop:'90px', top:'50px'}}>
      SuvMain
    </div>
  )
}

export default SuvMain
