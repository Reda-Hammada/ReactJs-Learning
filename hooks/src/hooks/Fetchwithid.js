import React from 'react'
import {useEffect,useState}  from 'react'
import axios from 'axios'
function Fetchwithid() {
    const[id,  setId] = useState(1)
    const [post, setPost] = setPost([]);
    

    useEffect(()=>{

        axios.get(
            `https://jsonplaceholdre.typicode.com/posts/${id}`)
        .then(res => {

            setPost(res.data)
        })

        .catch(err=>{
            console.log(err)
        })
    },[])

  return (

    <div>
       <input type='text'
       value={id}  
       onChange ={
        e=>setId(e.target.value)
        } />
        <div>
            {post.map(onepost =>(
                <li key={onepost.id}>{onepost.title}</li>
            ))}
        </div>
    </div>
  )
}

export default Fetchwithid