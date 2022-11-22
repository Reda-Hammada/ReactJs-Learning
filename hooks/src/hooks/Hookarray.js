import React,{useEffect, useState} from 'react';

export default function Hookarray() {

    const [items,setItems] = useState([]);

    const addItem = () => {

        setItems([...items,{

            id:items.length,
            value:Math.floor((Math.random() * 10)+1),
        }])

        console.log(items);
    }

  return (

    <div>
    
        <button onClick={addItem}>Add Item</button>

        <ul>
            {
                items.map(item => (

                 <li key={item.id}>{item.value}</li>

                ))
            }
        </ul>
    </div>
  )
}
