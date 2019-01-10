import React from 'react';
import { StyleSheet, Text, View,Container, Content, Picker, Button } from 'react-native';
import Login from "./src/LoginScreen/index.js";
// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isReady: false
//     };
//   }
//   render() {
//     return <Login />;
//   }
// }
import Defis from './src/LoginScreen/index.js' 
import Quote from './src/PrimeraScreen/Presentacion.js'





export default class Betty extends React.Component {
constructor(props){
 super(props)
 this.state = {
  component : <Quote />
 }
}


componentDidMount(){

     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition

          this.setState({ component: <Defis style={{backgroundColor:'red',opacity:0}}/> })
     }, 3500);
}

componentWillUnmount(){
     clearTimeout(this.timeoutHandle); 
}

render() {
return (
  this.state.component
);
}
}