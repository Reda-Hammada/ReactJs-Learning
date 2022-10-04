import { element } from "prop-types";
import { Component } from "react";
import Button from './Button';

class Randomnumber extends Component { 

  constructor(props){
    super(props);
    this.state = {
      Number :0,

    };


     this.handleClick = this.handleClick.bind(this);
     this.button = this.button.bind(this);
     this.paragraph = this.paragraph.bind(this);

  }

  handleClick (e){

    let rand =  Math.floor(Math.random() * 10)+1;
    this.setState({Number:rand});
     
   
     
    }
    
     button(){

      return <div><button onClick={this.handleClick}>Click me</button></div>
    }

    paragraph(){

      return <div><p>You Winn !!</p></div>

    }
    
  render () {
    
   

    if(this.state.Number != 7){
      var  element =  this.button();
    }
    else {

      var element = this.paragraph();
    }

    return (
        <div>
          <h1>Randomnumber</h1>
            <h2>{this.state.Number}</h2>
            <div>{element}</div>
        </div>


    )
  }
}

export default Randomnumber;