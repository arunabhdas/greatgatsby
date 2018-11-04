import React, { Component }  from "react"

import "tabler-react/dist/Tabler.css";


import { Card, Button } from "tabler-react";

class MyCard extends Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title>GreatGatsby | A collection of amazing dev tools</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button color="primary">Unleas the Awesomeness</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default MyCard;
