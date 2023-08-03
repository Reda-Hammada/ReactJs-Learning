import React,{useCallback, useMemo,useState} from 'react'
import {MemoizedMemoChild} from './MemoChild';

const MemoParent = () => {
  const person = {
    fname:'Reda',
    lsname:'Hammada',
  } 

    const [count,setCount] = useState(0)
    const[name,setName] = useState(person)
    const handleCount = () => setCount(count + 1)
    const changePerson = () => { 
      const newPerson = {...person};
      newPerson.fname='Yassine'
      newPerson.lsname='Yassine'
      setName(newPerson)

    }
    const memoiZedPerson = useMemo(()=> name,[name])
    console.log('Memo Parent');
  return (
    <div>
      <p>useMemo Memoization</p>

      <button onClick={handleCount}>
      {count}

      </button>
      <button onClick={changePerson}>Change name</button>
        <MemoizedMemoChild name={memoiZedPerson}/>
    </div>
  )
}

export default MemoParent