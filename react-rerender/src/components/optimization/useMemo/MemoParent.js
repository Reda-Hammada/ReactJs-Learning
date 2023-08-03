import React,{useCallback, useMemo,useState} from 'react'
import {MemoizedMemoChild} from './MemoChild';



const MemoParent = () => {
  const person = {
    fname:'Reda',
    lsname:'Hammada',
  } 

    const [count,setCount] = useState(0)
    const handleCount = () => setCount(count + 1)
    const memoiZedPerson = useMemo(()=> person,[])
    console.log('Memo Parent');
  return (
    <div>
      <p>useMemo Memoization</p>

      <button onClick={handleCount}>
      {count}

      </button>
        <MemoizedMemoChild name={memoiZedPerson}/>
    </div>
  )
}

export default MemoParent