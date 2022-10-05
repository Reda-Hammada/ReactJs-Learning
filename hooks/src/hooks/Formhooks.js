import React, { useState } from "react" 

export default Formhooks;

function Formhooks (){

    const [email,setEmail] = useState("");

    return(
        <div>
            <input type='email'
                    value={email}
                    onChange = {(e)=>{
                
                        setEmail(e.target.value)
                    }} />
                    <p>{email}</p>

            <button onClick={()=>{

                    setEmail("")

            }}>reset</button>
        </div>
    )
}