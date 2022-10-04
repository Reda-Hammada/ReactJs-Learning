import { Component } from "react";

class Button extends Component {

    render(){

        return(

            <div>
                <button >{this.props.click}</button>
            </div>
        )
    }

}


export default Button;