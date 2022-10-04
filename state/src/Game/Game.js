import React, {Component}  from 'react';


class Game  extends Component {
// initialize state 
    constructor(props){
        super(props);

        this.state = {

            score:0,
        };
    }

    render(){
        return(

            <div>
                <h1>Your score is :{this.state.score}</h1>
            </div>
        )
    }
}

export default Game;