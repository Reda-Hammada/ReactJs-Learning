import React from 'react'
import {useEffect,useState}  from 'react'
import axios from 'axios'


function Fetchwithid() {

    const[id,  setId] = useState()
    const[buttonClick, setIdFromButtonClick] = useState(1)
    const [posts, setPost] = useState({});
    
    const handleClick = () => {

        setIdFromButtonClick(id)
    }
    

    useEffect(()=>{

        axios.get(
            `https://jsonplaceholder.typicode.com/posts/${buttonClick}`
            )

        .then(res => {

            console.log(res.data)
            setPost(res.data)
        })

        .catch(err=>{
            console.log(err)
        })
    },[buttonClick])



  return (

    <div>
       <input type='text'
       value={id}
       onChange={
        e=>setId(e.target.value)
       }  
        />
       <button onClick={ 
            handleClick}>
            Click me!
        </button>
        <div>
           {posts.title}
        </div>
    </div>
  )
}

export default Fetchwithid