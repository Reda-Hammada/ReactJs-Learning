import React from 'react'
import { useRef } from 'react'

function Refhook1() {

    const element = useRef(null);
    const paragraph = useRef(null)

    const submitHandle = (e) => {

      e.preventDefault();
      paragraph.current.innerText = element.current.value


    }
  return (

    <div>
        <form >
           <input ref={element} type='text'
                  name='name' />
           <input type='submit' 
                  onClick={
                    submitHandle
                  }/>

        </form>
        <p ref={paragraph}></p>
    </div>

  )
}

export default Refhook1