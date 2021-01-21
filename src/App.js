import React from "react"
import './App.css'
import Timer from './Timer'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {person:{fullName:"med azizi", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png", profession:"engineer"},show:false};
  }
  
  st=()=>{
    {this.setState( {show:!this.state.show})}
  }
  render() {
    return (
      <div>
        <button onClick={this.st} >{this.state.show? "hide":"show"}</button> <br/>
        {this.state.show ?(
             <>
             <img src={this.state.person.img} alt=""/>
             <h1>Name: {this.state.person.fullName}</h1>
             <h2>profession: {this.state.person.profession}</h2>
             <Timer></Timer>
             </>
            ):(<></>)
        } 
        

              
            
          
        
        
      </div>
    );
  }
}

export default App;
