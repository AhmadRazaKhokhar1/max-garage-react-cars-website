import React from 'react'
import p2p from '../../../../Assets/p2p.png'

function SmContentSubComp() {
  return (
    <div>
       <div className="main-content">
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "900",
                  wordSpacing: "5px",
                  letterSpacing: "3px",
                }}
              >
                MAX GARAGE
              </h1>
          <div className="flex justify-center items-center">
          A Product of  <img src={p2p} alt="P2P Clouds Mian Ahmad Basit and Ahmad Raza Khokhar"/>
            </div> 
              <div className="flex">
                <span>Developed by</span>
                &nbsp; &nbsp; &nbsp;
                <h1 style={{ fontWeight: "900", letterSpacing: "2px" }}>
                  Ahmad Raza Khokhar
                </h1>
              </div>
            </div>
    </div>
  )
}

export default SmContentSubComp
