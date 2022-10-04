import { element } from "prop-types";
import { Component } from "react";

class Randomnumber extends Component { 

  constructor(props){
    super(props);
    this.state = {
      Number :7,

    };
  this.handleClick();

  }

  handleClick (e){

    let rand =  Math.floor(Math.random() * 10)+1;
    this.setState({Number:rand});
     
   
     
    }
    
    
  render () {
 
    if(this.state.Number != 7){

      let  element =  '<button onClick = handleClick()>Click me</button>';
      // document.getElementById('button_div').innerHTML = element;
    }else {

      let element = `you Win !!`;
    }

    return (
        <div>
          <h1>Randomnumber</h1>
            <h2>{this.state.Number}</h2>
            <p>{element}</p>
            {/* <div id='button_div'></div> */}
        </div>


    )
  }
}

export default Randomnumber;