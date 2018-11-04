import React, { Component } from 'react';
import { Card, Button } from "tabler-react";

class ProjectItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props);
    return (
      <div className="ProjectItem">
        <Card>
        <Card.Header>
          <Card.Title><strong>{this.props.project.title}</strong></Card.Title>
        </Card.Header>
        <Card.Body>
          <Button color="primary">{this.props.project.category}</Button>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default ProjectItem;
