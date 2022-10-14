import React, { useState,useEffect } from 'react';

function Form () {

    const [todo, setTodo] = useState("");
    
    const addTodo = () =>{
        let randomNumber = Math.floor((Math.random() *1000000000)+1);
        let randomStrinfigy = String(randomNumber);
        let task  =  todo;
        localStorage.setItem(randomStrinfigy,task);

    }

    const reset = () => {

        setTodo("");
    }

    const getAllTasks = () => {
        
         const tasks = [];

        for(let i=0; i <localStorage.length; i++  ){

            tasks[i]=localStorage.getItem(localStorage.key(i));
        }

        return tasks;
    }

  
    return(

        <div>
            <form
                onSubmit={event=>{
                    event.preventDefault();
                    addTodo();
                    reset();
                }}
                
                >
                <div>
                    <input value={todo} type='text' 
                           required
                           onChange={e=>{
                            setTodo(e.target.value);
                           }}
                     />
                </div>
                <div>
                    <input type = 'submit' />
                </div>
                <p>{}</p>
            </form>
        </div>

    );
}
export default Form;
