import React, { Component } from 'react';
import Projects from './components/Projects';
import {init as firebaseInit} from './javascript/firebase';



import "tabler-react/dist/Tabler.css";
import { Card, Button } from "tabler-react";
class App extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
  }
  render() {
    return (
      <div className="App">
        <Projects/>
      </div>
    );
  }
}

export default App;
