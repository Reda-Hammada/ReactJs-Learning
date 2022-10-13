import React, { useState } from 'react';
function Form () {

    const [todo, setTodo] = useState([]);

    return(

        <div>
            <form>
                <div>
                    <input type='text' required onChange={
                        (e)=>{
                            setTodo(e.target.value)
                        }
                    } />
                </div>
                <div>
                    <input type = 'submit' />
                </div>
            </form>
            <p>{todo}</p>
        </div>

    );
}
export default Form;
