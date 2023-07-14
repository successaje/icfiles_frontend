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
     {/* <Greet />
     <Welcome /> */}
     <Hello />
    </div>
  );
}

export default App;
