import logo from './logo.svg';
import './App.css';

import Greet from "./components/Greet";
import { Component } from 'react';
import Hello from "./components/Hello"

import Welcome from "./components/Welcome"

// class Apps extends Component {
//   render() {
//     return (

//     );
//   };
// };

function App() {
  return (
    <div className="App">
      
     <Greet name = "John Wick" heroName = "Babayaga">
      <p>This is the children class</p>
     </Greet>
     <Greet name="Sasuke Uchiha" heroName = "Shadow Hokage"/>
      <button>Action</button>
     <Greet name = "Gol D Roger" heroName = "Pirate King"/>

     <Welcome name = "John Wick" heroName = "Shadow Hokage"/>
     <Welcome name = "Gol D Roger" heroName = "Pirate King"/>
     <Welcome name="Sasuke Uchiha" heroName = "Shadow Hokage"/>

     <Hello />
    </div>
  );
}

export default App;
