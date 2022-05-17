import React from 'react'

export default function Contact(props) {
  return (


    <div>

      <h1>{props.name}</h1>
      <img src={props.img} alt="person" />
      <p>{props.email}</p>

    </div>

    
  )


}
