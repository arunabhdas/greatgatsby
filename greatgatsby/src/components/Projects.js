import React, { Component } from 'react';
import { Card, Button } from "tabler-react";

class Projects extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Projects">
        <Card>
        <Card.Header>
          <Card.Title>My Projects</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button color="primary">Button</Button>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default Projects;
