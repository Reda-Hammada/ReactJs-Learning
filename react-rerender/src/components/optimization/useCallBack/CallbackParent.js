import React,{useCallback,useState} from 'react'
import {MemoizedCallBackChild} from './CallBackChild'
 
const CallbackParent = () => {
    const[count,setCount] = useState(0);
    const changeCount = () => setCount(count +1)
    const memoizedChangeCount  = useCallback(()=>{
        setCount(count +1)
    }, [])

    console.log('Parent callback render')
  return (
    <div>
        <h1>Memoization call back</h1>
        <p>{count}</p>
        <MemoizedCallBackChild handleClick={memoizedChangeCount}/>
    </div>
  )
}

export default CallbackParent