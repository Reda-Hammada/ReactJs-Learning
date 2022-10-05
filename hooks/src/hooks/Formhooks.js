import React, { useState } from "react"

export default Formhooks;

function Formhooks (){
    let [state,setState] = useState("");

    return(
        <div>
            <input type='text'
                    onChange = {(e)=>{

                        setState(state =  e.target.value)
                    }} />
                    <p>{state}</p>
        </div>
    )
}