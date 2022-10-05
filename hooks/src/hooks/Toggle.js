import React from 'react';
import useToggle from './useToggle';

function Toggle () {
  
    const [show, setShow] = useToggle(true);

    return (

        <div>
            <h1>{show ? 'hello world':"" }</h1>
            <button onClick={setShow}>click </button>
        </div>
    )
}

export default Toggle;