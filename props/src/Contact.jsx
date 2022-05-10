import React from 'react'

const style = {
  width: "200px",
  height: "130px"
};

export default function Contact(props) {
  return (


    <div>

      <h1>{props.name}</h1>
      <img style={style} src={props.img} alt="person" />
      <p>{props.email}</p>

    </div>
    
  )
}
