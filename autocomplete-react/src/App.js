import React, { Component } from "react";
import "./App.css";
import { AutoCompleteText } from "./component/AutoCompleteText";
import countries from './countries';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <AutoCompleteText items={countries} />
          <br></br>
          <AutoCompleteText items={['Jan', 'Koos', 'Piet', 'Bianca', 'Buster', 'Lafras']} />
        </div>
      </div>
    );
  }
}

export default App;
