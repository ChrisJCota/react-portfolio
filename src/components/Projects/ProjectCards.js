import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';

function DeployedCards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Link href={props.gitRepo}>Github Repo</Card.Link>
        <Card.Link href={props.deployedLink}>Deployed</Card.Link>
      </Card.Body>
    </Card>

  );
}

export default DeployedCards;