import React,{useState} from 'react'

const ArrayUseState = () => {

    const languagesArr = ['JavaScript','TypeScript','PHP'];
    const [languages,setLanguages] = useState(languagesArr);
    
    const changeLanguage = () => {
        const newLanguages = [...languages,'Python','JAVA']
        setLanguages(newLanguages);
    }

    console.log('rerender with array')
  return (
    <div>
        <h1>ArrayUseState</h1>
        <ul> 
        {languages.map((language,index) => (

            <li key={index}>{language}</li>
     
        ))}
        </ul>
        <button onClick={changeLanguage}>
            add languages
        </button>
    </div>
  )
}

export default ArrayUseState