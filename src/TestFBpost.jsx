import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function TestFBpost() {
    const url = 'https://graph.facebook.com/v18.0/act_1575468643242468/campaigns?access_token=EAAM4NClqHVcBOyfPxWwebM4abRmNivWuYeC7LO96R1qUpHfbGIdoEAdZAPtPb8KUihuyFXf7PnlFelU1AMX0KIYqZCXDApskiyuhC536ZCtVW1QqQLwDv2ZC1J3Otgv9oIE37qmnxnyJWxdEFKBrz3ZAhgbVWW7xTunA9SgTTqbbfKglGAL5L6F4xCPqZBlv8AGVleOH9J';
    const access_token ='EAAM4NClqHVcBOyfPxWwebM4abRmNivWuYeC7LO96R1qUpHfbGIdoEAdZAPtPb8KUihuyFXf7PnlFelU1AMX0KIYqZCXDApskiyuhC536ZCtVW1QqQLwDv2ZC1J3Otgv9oIE37qmnxnyJWxdEFKBrz3ZAhgbVWW7xTunA9SgTTqbbfKglGAL5L6F4xCPqZBlv8AGVleOH9J';
   const [testData, setTestData] = useState(null)
    const addCampaign = async()=>{

        const data ={
        name:"This is a test name from react js to facebook",
        buying_type: "AUCTION",
        objective: "PAGE_LIKES",
        status: "ACTIVE",
    };
    
    try {
      const response =await  axios.post(url, data, {
            params:{
                access_token:access_token,                
            }
        });
       setTestData(response.data);
       console.log(response)
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message)
        toast.error(AxiosError.message)
    }
    
}
    // useEffect(()=>{addCampaign()}, [testData]);

    return (
     <div style={{minHeight:'90vh', marginTop:'5rem', position:'absolute'}}>
      <button onClick={addCampaign} style={{background:'cyan', borderRadius:'15px', padding:'25px' , margin:'auto'}}>Add New Campaign</button>
      <div id="msg">{testData}</div>
    </div>
  )
}

export default TestFBpost
