import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';

function DeployedCards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Link href={props.gitRepo} target="_blank">Github Repo</Card.Link>
        
      </Card.Body>
    </Card>

  );
}

export default DeployedCards;
