import React, { Component } from 'react';
import Projects from './components/Projects';
import {init as firebaseInit} from './javascript/firebase';



import "tabler-react/dist/Tabler.css";
import { Card, Button } from "tabler-react";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          title: 'Great Gatsby',
          category: 'Desktop'
        },
        {
          title: 'Social App',
          category: 'Mobile'
        },
        {
          title: 'Ecommerce Shopping cart',
          category: 'Web'
        },
        
      ]
    }
    firebaseInit()
  }
  render() {
    return (
      <div className="App">
        <Projects projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
