import React from 'react'

/**Child rerender but bails out in the commit phase so the updates are not applied to the DOM */
const Child = (props) => {
    const {languages}  = props;
    console.log('Child render')
  return (
    <div>
       <ul> 
        {languages.map((language,index) => (

            <li key={index}>{language}</li>
     
        ))}
        </ul>
    </div>
  )
}

export default Child