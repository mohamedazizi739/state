import React from "react"
class Timer extends React.Component{
 constructor(props){
 super(props);
 this.state={timer:0}
 this.res='';
}
 
    componentDidMount() {
    
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      timer: this.state.timer+1
    });
  }
  componentWillUnmount() {
   
    clearInterval(this.timerID);
    
    
  }
  

  render(){
   this.res=new Date(this.state.timer * 1000).toISOString().substr(11, 8);
   return <h2>timer : {this.res}</h2>
  }
}
export default Timer;