import React,{useState} from 'react'
import {MemoizedChildOne} from './ChildOne';

/**
 * same element reference
 * When a parent component's state changes and causes an uneccessary re-render for its childern, thus a performance issue 
 * 
 * 
 */
const ParentOne = () => {

  const [count, setCount] = useState(0);
    console.log('React memo Parent render')

  return (

    <div>
        <h1>Render with React memo</h1>
        <button onClick={()=>setCount(count + 1)}>increment </button>
        <button onClick={()=>setCount(0)}>reset</button>

        <MemoizedChildOne count={count}/>
    </div>

  )
}

export default ParentOne