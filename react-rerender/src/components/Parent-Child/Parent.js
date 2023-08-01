import React,{useState}from 'react';
import Child from './Child';

const Parent = () => {
    const languagesArr = ['JavaScript','TypeScript','PHP'];
    const [languages,setLanguages] = useState(languagesArr);
    
    const changeLanguage = () => {
        // const newLanguages = [...languages,'Python','JAVA']
        // setLanguages(newLanguages);
        languages.push('Java')
        setLanguages(languages)
    }

    console.log('Parent render')
  return (
    <div>
        <h1>Parent-Child Render</h1>

        <button onClick={changeLanguage}>
            add languages
        </button>
        <Child languages = {languages} />
    </div>
  )
}

export default Parent