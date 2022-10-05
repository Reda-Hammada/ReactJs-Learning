import React, {useState, useEffect} from 'react';
export default Useeffect;

function Useeffect(){
    const [state, setState] = useState(0)
    useEffect(()=>{

        document.title =  `You click ${state}`;
    })
    return(
        <div>
            <button onClick={()=>{setState(state + 1)}}>click</button>
        </div>
    )
}