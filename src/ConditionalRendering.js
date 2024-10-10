import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [age,setAge] = useState(18)
  return (
    <div>
        <input placeholder='Enter Your Age' value={age} onChange={(event)=>setAge(event.target.value)}/>
        {
           age>=18?<p>
            Eligible to vote
           </p>:<p>
            Not Eligible to Vote
           </p>
        }
    </div>
  )
}

export default ConditionalRendering
