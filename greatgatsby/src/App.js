import React, { Component } from 'react';
import "tabler-react/dist/Tabler.css";
import { Card, Button } from "tabler-react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Card>
        <Card.Header>
          <Card.Title>Welcome to GreatGatsby</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button color="primary">Button</Button>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default App;
