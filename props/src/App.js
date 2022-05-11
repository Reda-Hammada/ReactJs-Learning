import Contact from "./Contact.jsx";
import person1 from "./images/person1.jpeg";
import person2 from "./images/person2.jpeg"
function App() {


 

  return (


    
    <div className="App">

    <Contact  
    
      name = "reda"
      img = {person1}
      email="example1@mail.com"



      />
       <Contact  
         
         name = "Kate"
         img = {person2}
         email="example2@mail.com"



    />
    
      
    </div>
  );
}

export default App;
