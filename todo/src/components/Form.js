import React,{ useState,useEffect } from 'react';

function Form () {
    
    const [todo, setTodo] = useState("");
    const [tasks, setTasks] = useState([]);
    
    const addTodo = () =>{

        let randomNumber = Math.floor((Math.random() *1000000000)+1);
        let randomStrinfigy = String(randomNumber);
        let task  =  todo;
        localStorage.setItem(randomStrinfigy,task);
    }

    const reset = () => {
        
        setTodo("");
    }

     useEffect(() =>{

        function  getTasks(){

                const tasks = [];
                
                    for(let i=0; i<localStorage.length; i++){

                        tasks[i]=localStorage.getItem(localStorage.key(i));
                    }


                    setTasks(tasks)
     
                }

                getTasks();

            },[todo])  

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
                
            </form>
            <div>
                <ul>
                    {tasks.map(task =>

                    <li>{task}</li>  )
                    
                }
                    
                </ul>
            </div> 
        </div>
    )

}

export default Form;