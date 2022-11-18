import { Component } from "react";

class App extends Component{
  render() {

    const { name,role } = this.props
    return (
      <>
   <h1 style={{backgroundColor:"darkblue",color:"cyan", textAlign:"center"}}>{name}</h1>
   <h2 style={{backgroundColor:"darkblue",color:"orange", fontSize:"20px", textAlign:"center"}}>{role}</h2>
   <input type="checkbox" name="" id="" /></>
    )
  }
}






// const App=({name,role})=>{
//   return <>
//   <h1 style={{backgroundColor:"darkblue",color:"cyan", textAlign:"center"}}>{name}</h1>
//   <h2 style={{backgroundColor:"darkblue",color:"orange", fontSize:"20px", textAlign:"center"}}>{role}</h2>
//   <input type="checkbox" name="" id="" /></>
// }

export default App;