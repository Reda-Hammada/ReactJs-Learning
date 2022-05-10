import React from "react";



export default function Greet() {
    
    let date = new Date();
    let hour = date.getHours();
 
    if(hour < 12){

 


        return (

            <div>

            <h1 style={{color:"red"}}>Good Morning</h1>

            </div>
        );
            
    }

    else{

        if(hour <18){
          

            return(

                <div>
                    <h1 style={{color:'blue'}}>Good Afternon</h1>
                </div>
            )
        }

        else{


            return(

                <div>
                    <h1 style={{color:'purple'}}>Good Evening</h1>
                </div>
            )

        }
    }


}

