import React, { Component } from 'react';
import { Card, Button } from "tabler-react";
import ProjectItem from './ProjectItem';

class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let projectItems;
    if (this.props.projects) {
        projectItems = this.props.projects.map(project => {
            // console.log(project);
            return (
                <ProjectItem key={project.title} project={project}/>
            );
        });
    }
    console.log(this.props);
    return (
      <div className="Projects">
        <Card>
            
            <Card.Header>
            <Card.Title>My Projects</Card.Title>
            </Card.Header>
            <Card.Body>
            {projectItems}
            </Card.Body>
      </Card>
      </div>
    );
  }
}

export default Projects;
