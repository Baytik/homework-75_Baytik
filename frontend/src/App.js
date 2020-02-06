import React, {Component} from 'react';
import './App.css';
import Cipher from "./Components/Cipher/Cipher";

class App extends Component{
  render() {
    return(
        <div className="App">
            <Cipher/>
        </div>
    )
  }
}

export default App;
