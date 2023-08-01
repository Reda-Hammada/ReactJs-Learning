import React,{useState} from 'react'

const UseState = () => {

    const [count,setCouter] = useState(0);

    console.log('Rendered with useState');

  return (
    <div>
        <h1>UseState</h1>
        <p>{count}</p>
        <button onClick={()=>setCouter(count + 1)}>count-1</button>
        <button onClick={()=>setCouter(5)}>count-5</button>
        <button onClick={()=>setCouter(0)}>count-0</button>


    </div>
  )
}

export default UseState