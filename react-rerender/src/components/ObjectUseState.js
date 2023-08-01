import React,{useState} from 'react'

const ObjectUseState = () => {

    const personData = {
       fname:'Reda',
       lsname:'Hammada',
    }

    const [person , setPerson] = useState(personData)

    const changePerson = () => {
       const newPerson = {...person}
       newPerson.fname ='Joe'
       newPerson.lsname = 'Doe'
       setPerson(newPerson)
    }

    console.log('rerender with objects')
  return (
    <div>
        <h1>With objects</h1>
        {person.fname} . {person.lsname}
        <button onClick={changePerson}>
            change me
        </button>
    </div>
  )
}

export default ObjectUseState