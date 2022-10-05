import  {useState} from 'react';

function useToggle(Value = false){

    const [state, setState] = useState(Value);

    const toggler = () => {

            setState(!state);

    }

    return [state,toggler];

}

export default useToggle;