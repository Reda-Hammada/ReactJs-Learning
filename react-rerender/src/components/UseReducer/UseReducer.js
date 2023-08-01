import React,{useReducer}from 'react'
import { Reducer } from './Reducer'

const UseReducer = () => {
    const {reducer , initialState} = Reducer;
    const [status,dispatch] = useReducer(reducer, initialState)
    console.log('Rerendered with useRducer')

  return (
    <div>
      <h1>UseReducer</h1>
      <p>{status}</p>
       <button onClick={()=>dispatch('success')}>success</button>
       <button onClick={()=>dispatch('loading')}>loading</button>
       <button onClick={()=>dispatch('error')}>error</button>
       <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}

export default UseReducer