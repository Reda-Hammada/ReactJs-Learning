import { Component } from "react";
import {UserConsumer} from './useContext';
class ComponentA extends Component {

    render(){


        return(
            <div>
                <UserConsumer>
                    {
                        (user)=>{

                            return <p>hello {user}</p>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentA;