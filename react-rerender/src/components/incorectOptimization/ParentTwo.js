import React,{useState} from 'react'
import {MemoizedChildTwo} from './ChildTwo'

/**
 * incorrect way of using react memo
 * when the child component has HTML elements or other react component and not merely text node it will re-render
 * when the other count state changes and not just the props
 * keep in mind if passing objects or functions as props to the child component the React memo can't optimize the re-render since afer every render a new reference is created for the object and function created in parent and passed to the child
 */
const ParentTwo = () => {

    const [name,setName] = useState('Reda');
    const [count,setCount] = useState(0)

    const changeName = () => setName('Yassine');
    const incrementCount = () => setCount(count +1)

    console.log('Parent two rerender')

  return (
    <div>
        <h1>Incorrect usage of React memo</h1>
        <p>{count}</p>
        <MemoizedChildTwo name={name}>
            <strong>Hello</strong>
        </MemoizedChildTwo>
        <button onClick={changeName}>
            change name
        </button>
        <button onClick={incrementCount}>
            change count
        </button>
    </div>
  )
}

export default ParentTwo